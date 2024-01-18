import React from 'react'


function App() {

  return (
    <>
      <div className='relative w-full h-screen bg-cyan-300 '>
      <div className='absolute top-1/2 left-1/2 -translate-x-[51%] -translate-y-[50%] z-[2]'>
        <img src='imageedit_1_2115809362.png' className='w-32 h-32' ></img>
        <div className='py-10 text-center'>
          <h3 className='font-semibold text-lg text-zinc-900'>Siddharth Pandey <span className='font-normal text-zinc-400 px-1 text-lg'>22</span></h3>
          <h5 className='py-2 text-zinc-400'>India</h5>
        </div>
      </div>
      </div>
      <div className='absolute bottom-0 w-full bg-white h-[57%] z-[1]'>
        <div className='fixed bottom-0'>
          
        </div>
      </div>
    </>
  )
}

export default App
