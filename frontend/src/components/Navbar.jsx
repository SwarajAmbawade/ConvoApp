import React from 'react'

function Navbar() {
  return (
    <>
    <div className='max-w-screen-2xl mx-auto container px-6 py-1 md:px-40 shadow-lg h-12 fixed'>
        <div className='flex justify-between'>
            <h1 className="text-2xl font-bold cursor-pointer group">
                <span className="text-black transition-colors duration-300 group-hover:text-green-400">
                    Word
                </span>
                <span className="text-3xl text-green-400 transition-colors duration-300 group-hover:text-black">
                    To
                </span>
                <span className="text-black transition-colors duration-300 group-hover:text-green-400">
                    PDF
                </span>
            </h1>
            <h1 className='mt-1 text-2xl cursor-pointer font-bold hover:scale-110 hover:text-green-800 transition duration-300'>HOME</h1>
        </div>
    </div>
    </>
  )
}

export default Navbar
