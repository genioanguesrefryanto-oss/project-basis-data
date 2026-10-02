import React from 'react'
import img1 from './img/s1.png'
import img2 from './img/s2.png'

function Sejarah() {
  return (
    <section
      className="min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url(${img1})`,
      }}
    >
      <div className="grid min-h-screen items-center gap-10 p-10 lg:grid-cols-2">

        <img src={img2} alt="" className="w-full border border-white" />

        <div>
          <p>02 - OUR HISTORY</p>
          <h2 className="text-8xl font-bold leading-none">BUILT OVER TIME</h2>
          <p className="mt-4 text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p>1899 - present</p>

          <h3>EXPPLORE THE FULL STORY</h3>
        </div>

      </div>
    </section>
  )
}

export default Sejarah