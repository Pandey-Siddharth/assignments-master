import { useState } from 'react'

import Background from './components/Background'
import ColorBar from './components/ColorBar'

function App() {
  const [color, setcolor] = useState("white");

  return (
    <>
        <ColorBar setColor={setcolor} ></ColorBar>
        <Background color={color} ></Background>
    </>
  )
}

export default App
