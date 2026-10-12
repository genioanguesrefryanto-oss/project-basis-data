import { useEffect } from 'react'
import { initAOS } from './lib/motion'
import Navbar from './genio/navbar/Navbar'
import Players from './genio/Players/Players'
import Coaches from './genio/Coaches/Coaches'
import Hero from './ALFIN/Hero/Hero'
import Sejarah from './ALFIN/sejarah/Sejarah'
import Footer from './ALFIN/footer/Footer'

function App() {
  // AOS.init() harus setelah React selesai render pertama, karena dia memindai
  // element [data-aos] yang ada di DOM. Dipanggil dari useEffect, bukan di
  // top-level modul.
  useEffect(() => {
    initAOS()
  }, [])

  return (
    <div>
      <Navbar />
      <Hero />
      <Sejarah />
      <Players />
      <Coaches />
      <Footer />
    </div>
  )
}

export default App