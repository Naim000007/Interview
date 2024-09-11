import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordian from './Components/accordian/Accordian'
import RandoColo from './Components/Generate_Random_color/RandoColo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* accordian */}
      <Accordian />
      <RandoColo />
    </>
  )
}

export default App
