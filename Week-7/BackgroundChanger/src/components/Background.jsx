import React from 'react'

function Background({color}) {
  return (
    <div className={`relative w-full h-screen bg-${color} z-[1]`}>
    </div>
  )
}

export default Background
