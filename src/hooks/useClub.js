import { useEffect, useState } from 'react'
import { getClubs } from '../api/client'

// Navbar dan Sejarah butuh data club yang sama, jadi request-nya di-dedup di
// level modul: pemanggil kedua langsung dapat promise yang lagi jalan, bukan
// nembak API lagi.
let inflight = null

const fetchClub = () => {
  inflight ??= getClubs()
    .then((list) => list[0] ?? null)
    .catch((err) => {
      // Jangan nge-cache kegagalan, kalau tidak percobaan berikutnya (mis. после
      // user ganti jaringan) akan selalu dapat error yang sama.
      inflight = null
      throw err
    })
  return inflight
}

// Data club sifatnya dekoratif, jadi error ditelan diam-diam: komponen pemanggil
// tinggal ngecek null -> render fallback.
export const useClub = () => {
  const [club, setClub] = useState(null)

  useEffect(() => {
    let alive = true

    fetchClub().then((data) => {
      if (alive) setClub(data)
    }).catch(() => {})

    return () => { alive = false }
  }, [])

  return club
}