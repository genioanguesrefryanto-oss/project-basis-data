import React from 'react'
import img from '../../images/foto.jpeg'

const CardPlayers = ({gambar, personal, umur, bendera}) => {
  return (
    <div className="">
        <img src={img} alt="" className='object-cover aspect-square w-full'/>

        <div className='p-3'>
            <h2 className="text-4xl font-display">
                LAMINE YAMAL
            </h2>
            <div className="flex justify-between text-2 font-condensed">
                <p>WINGER</p>
                <p className='border-r-1 border-l-1 border-white/20 pl-3 pr-3.5'>18</p>
                <p>SPAIN</p>
            </div>
        </div>
    </div>
  )
}

export default CardPlayers