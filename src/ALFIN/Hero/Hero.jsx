import React from 'react'
import img from './img/Hero 1.png'


function Hero() {
    return (
        <div className='bg-black relative w-full h-[100vh] text-white items-center'>
            <img src={img} alt="BLAUGRANA" className='w-full h-full object-cover rounded-lg' />

            <div className=' absolute top-50/100 left-5/100 -translate-y-50/100'>
                <p className='ml-2 text-[clamp(.6rem,5vw,1rem)] mb-5'>BLAUGRANA EDITORIAL</p>
                <h2 className='font-bold text-[clamp(4.5rem,13vw,10rem)] leading-none '>
                    MÉS QUE <br />UN CLUB
                </h2>
            </div>


        </div>
    )
}

export default Hero