import React from 'react';

function App() {
  return (
    <>
      <div className='relative w-full h-screen bg-cyan-300'>
        <div className='absolute top-1/2 left-1/2 -translate-x-[51%] -translate-y-[50%] z-[2]'>
          <img src='imageedit_1_2115809362.png' className='w-32 h-32' alt='Profile' />
          <div className='py-10 text-center'>
            <h3 className='font-semibold text-lg text-zinc-900'>
              Siddharth Pandey <span className='font-normal text-zinc-400 px-1 text-lg'>22</span>
            </h3>
            <h5 className='py-2 text-zinc-400'>India</h5>
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 w-full bg-white h-[60%] z-[1]'></div>
      <div className='footer flex fixed bottom-0 items-center justify-between px-20 py-20 w-full z-[3]'>
            <h2 className='font-bold font-lg'>80K</h2>
            <h2 className='font-bold font-lg'>803K</h2>
            <h2 className='font-bold font-lg'>1.4K</h2>
          </div>
    </>
  );
}

export default App;
