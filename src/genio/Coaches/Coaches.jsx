import React from 'react'
import SquadGrid from '../components/SquadGrid'
import CardPerson from '../components/CardPerson'
import BarcaCrest from '../components/BarcaCrest'
import { getCoaches } from '../../api/client'

// Pelatih tidak punya nomor punggung, jadi slot tengah kartu diisi crest.
// Jabatan sudah terlihat dari teks `posisi` di kiri,
// jadi crest-nya sama untuk semua orang.
const renderKartuPelatih = (pelatih) => (
  <CardPerson
    nama={pelatih.name}
    foto={pelatih.photo_url}
    posisi={pelatih.role?.name}
    lencana={<BarcaCrest className="w-6 h-6" />}
    kebangsaan={pelatih.nationality}
  />
)

const Coaches = () => (
  <SquadGrid
    id="coaches"
    ambilData={getCoaches}
    renderKartu={renderKartuPelatih}
    labelSeksi="COACHING STAFF"
    judul="THE STAFF"
    satuanData="COACHES"
  />
)

export default Coaches
