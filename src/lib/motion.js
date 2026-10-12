import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AOS from 'aos'
import 'aos/dist/aos.css'

gsap.registerPlugin(ScrollTrigger)

// User yang minta reduced motion di OS-nya nggak mau halaman meluncur terus.
// Dipakai di setiap animasi: kalau true, animasi di-skip total (elemen tetap
// terlihat, bukanDnsembunyi).
export const prefersReduced = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

let aosReady = false

// Dipanggil dari efek App, bukan di top-level main.jsx: AOS.init() memindai
// [data-aos] yang ada di DOM, dan React belum selesai render kalau dipanggil
// sebelum commit.
export const initAOS = () => {
  if (aosReady) return
  aosReady = true

  AOS.init({
    once: true,
    duration: 700,
    easing: 'ease-out-cubic',
    offset: 60,
    // Boolean, bukan function: AOS 2.3.4_cast ke `disable` sebagai helper
    // internal, sama sekali nggak perlu bergantung pada apakah dia menerima
    // function callback.
    disable: prefersReduced()
  })
}

// Offset AOS dihitung dari posisi element. Kartu baru yang masuk lewat VIEW MORE
// bikin halaman grow, jadi posisi semua yang di bawahnya geser. Panggil ini
// setelah DOM berubah.
export const refreshMotion = () => {
  ScrollTrigger.refresh()
  AOS.refresh()
}

// PENTING: jangan pakai `ctx.revert()` untuk animasi "muncul sekali lalu tetap
// di sana". `revert()` mengembalikan element ke kondisi SEBELUM animasi —
// yaitu autoAlpha:0 — jadi setiap kali effect jalan lagi, kartu yang sudah
// kelihatan akan loncat balik jadi transparan.
//
// Efek ini hanyaStop trigger-nya: element dibiarkan di posisi akhir, ScrollTrigger
// yang sudah selesai (once:true) memang sudah mati sendiri.
export const stopTriggers = (ctx) => {
  ctx.data.forEach((item) => item?.scrollTrigger?.kill())
}

export { gsap, ScrollTrigger, AOS }