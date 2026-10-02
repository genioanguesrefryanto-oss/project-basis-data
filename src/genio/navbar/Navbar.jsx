import React, { useState } from 'react'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const links = ['Home', 'About', 'Players', 'Coach']

  return (
    <div>
      <div className="nav flex justify-between items-center p-4 md:p-6 text-lg md:text-2xl">
        <h1 className="whitespace-nowrap">FC BARCELONA</h1>

        <div className="hidden md:flex gap-6 lg:gap-10">
          {links.map((link) => (
            <p key={link} className="hover:opacity-70 cursor-pointer">{link}</p>
          ))}
        </div>

        <h3 className="hidden md:block">1999 - 2026</h3>

        <button
          className="md:hidden text-3xl leading-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col gap-4 p-4 text-lg">
          {links.map((link) => (
            <p key={link} className="hover:opacity-70 cursor-pointer">{link}</p>
          ))}
          <p className="opacity-70">1999 - 2026</p>
        </div>
      )}
    </div>
  )
}

export default Navbar
