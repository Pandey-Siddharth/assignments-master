import React from 'react'

function ColorBar({setColor}) {
  return (
    <div className=' flex items-center justify-between absolute w-3/5 left-[20%] h-16 px-1 top-3/4 shadow-xl bg-white rounded-md z-[2]'>
    <div className='w-24 h-9 bg-red-600 rounded-lg flex justify-center'><button onClick={function(color){
        setColor(red-600)
    }}>Red</button></div>
    <div className='w-24 h-9 bg-yellow-300 rounded-lg flex justify-center'><button onClick={function(color){
        setColor(yellow-300)
    }}>Yellow</button></div>
    <div className='w-24 h-9 bg-green-600 rounded-lg flex justify-center'><button onClick={function(color){
        setColor(green-600)
    }}>Green</button></div>
    <div className='w-24 h-9 bg-zinc-900 rounded-lg flex justify-center'><button onClick={function(color){
        setColor(zinc-900)
    }} className='text-white'>Black</button></div>
    <div className='w-24 h-9 bg-purple-800 rounded-lg flex justify-center'><button onClick={function(color){
        setColor(purple-800)
    }}>Purple</button></div>
    <div className='w-24 h-9 bg-blue-800 rounded-lg flex justify-center'><button onClick={function(color){
        setColor(blue-800)
    }}>Blue</button></div>
    <div className='w-24 h-9 bg-orange-600 rounded-lg flex justify-center'><button onClick={function(color){
        setColor(orange-600)
    }}>Purple</button></div>
   </div>
  )
}

export default ColorBar
