import React from 'react'
import crestUrl from '../../assets/barca-crest.svg'

// Crest resmi FC Barcelona, vector aslinya dari Wikipedia (142x144, Inkscape).
// Disimpan sebagai file terpisah -- bukan inline SVG -- karena isinya 14 KB
// dengan ratusan node; dibiarin Vite hash jadi asset sendiri biar komponen
// ini ringan dan bisa dipakai ulang di Navbar/Footer.
//
// Catatan lisensi: crest ini TERDAFTAR MEREK. Boleh dipakai untuk keperluan
// identifikasi/komentar kritis (mis. tugas kuliah), jangan untuk komersial.
const BarcaCrest = ({ className = 'w-5 h-5', judulGambar = 'FC Barcelona' }) => (
  <img
    src={crestUrl}
    alt={judulGambar}
    // object-contain biar nggak gepeng kalau dipaksa w-8 h-8 dsb
    className={`object-contain ${className}`}
    loading="lazy"
  />
)

export default BarcaCrest
