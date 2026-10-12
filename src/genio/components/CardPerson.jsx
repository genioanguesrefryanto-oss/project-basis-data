import React from 'react'
import { assetUrl } from '../../api/client'
import fallback from '../../images/foto.jpeg'

// Satu kartu untuk semua orang di squad (pemain & pelatih). Bedanya cuma isi
// props-nya:
// - pemain -> `posisi` = nama posisi, `nomorPunggung` = squad_number
// - pelatih -> `posisi` = nama jabatan, `lencana` = logo/ikon di slot tengah
//
// `nomorPunggung` dan `lencana` saling menggantikan: kalau `lencana` ada,
// `nomorPunggung` diabaikan. Kalau keduanya kosong, slot tengah tidak muncul.
const CardPerson = ({
  nama,          // nama lengkap pemain atau pelatih
  foto,          // path foto dari backend (boleh null → pakai foto fallback)
  posisi,        // posisi bermain (Goalkeeper, Defender, dst) atau jabatan pelatih
  nomorPunggung, // nomor punggung pemain (1–99); dikosongkan untuk pelatih
  lencana,       // elemen/ikon pengganti nomorPunggung, biasanya crest klub
  kebangsaan,    // kewarganegaraan, ditampilkan di pojok kanan bawah kartu
  rasioGambar = 'aspect-square' // kelas Tailwind untuk rasio foto, default kotak
}) => {
  const src = assetUrl(foto) || fallback

  return (
    <div className="person-card border-1 border-white/50">
      {/* rasioGambar dipasang di amplop supaya zoom foto di dalam tidak
          mengubah tinggi kartu dan bikin layout melompat. */}
      <div className={`person-card-media ${rasioGambar}`}>
        <img
          src={src}
          alt={nama}
          className="object-cover w-full h-full"
          loading="lazy"
          onError={(event) => {
            // File di backend hilang / 404 → jangan biarkan gambar patah
            if (event.target.src !== fallback) event.target.src = fallback
          }}
        />
        <span className="person-card-sheen" aria-hidden="true" />
      </div>

      <div className="p-3 border-t-1 border-white/40">
        <h2 className="person-card-name text-4xl font-display mb-5">{nama}</h2>

        <div className="flex justify-between items-center text-lg font-condensed">
          <p className="tracking-wider uppercase">{posisi}</p>

          {lencana ? (
            // Garis samping dikasih supaya geometri kartu pelatih sama
            // persis dengan kartu pemain (yang nomornya dibatasi 2 garis)
            <span className="person-card-tag grid place-items-center px-6 shrink-0 border-r-1 border-l-1 border-white/30">
              {lencana}
            </span>
          ) : (
            nomorPunggung !== null && nomorPunggung !== undefined && (
              <p className="person-card-tag border-r-1 border-l-1 border-white/30 px-6">{nomorPunggung}</p>
            )
          )}

          <p className="uppercase">{kebangsaan}</p>
        </div>
      </div>
    </div>
  )
}

export default CardPerson

