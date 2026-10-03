import React from 'react'


function Footer() {
    return (
        <div className='bg-black grid'>

            <div className='text-white justify-between text-center flex flex-col md:flex-row p-6 md:p-10 border-b-1 border-barca-gold gap-4 md:gap-0'>
                <div className='py-3 flex-1'>
                    <h2 className='text-lg md:text-2xl font-bold'>CHELO</h2>
                    <p className='text-sm md:text-base'>15250907</p>
                </div>
                <span className='hidden md:block h-auto w-0.5 bg-barca-blue'></span>
                <hr className='md:hidden border-t border-barca-blue/50' />
                <div className='py-3 flex-1'>
                    <h2 className='text-lg md:text-2xl font-bold'>NABIL</h2>
                    <p className='text-sm md:text-base'>15250634</p>
                </div>
                <span className='hidden md:block h-auto w-0.5 bg-barca-garnet'></span>
                <hr className='md:hidden border-t border-barca-garnet/50' />
                <div className='py-3 flex-1'>
                    <h2 className='text-lg md:text-2xl font-bold'>ADAM</h2>
                    <p className='text-sm md:text-base'>15250540</p>
                </div>
                <span className='hidden md:block h-auto w-0.5 bg-barca-blue'></span>
                <hr className='md:hidden border-t border-barca-blue/50' />
                <div className='py-3 flex-1'>
                    <h2 className='text-lg md:text-2xl font-bold'>NEO</h2>
                    <p className='text-sm md:text-base'>15250346</p>
                </div>
                <span className='hidden md:block h-auto w-0.5 bg-barca-garnet'></span>
                <hr className='md:hidden border-t border-barca-garnet/50' />
                <div className='py-3 flex-1'>
                    <h2 className='text-lg md:text-2xl font-bold'>ALFIN</h2>
                    <p className='text-sm md:text-base'>15250003</p>
                </div>
            </div>

            <div className='py-5 px-6 md:px-10 flex flex-col md:flex-row justify-between text-center md:text-left text-white gap-2 md:gap-0'>
                <h3 className='font-bold text-lg md:text-xl'>FC BARCELONA</h3>
                <p className='text-sm md:text-base'>Ac Copyright by Kelompok 3</p>
            </div>
        </div>
    )
}

export default Footer
