import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import CounterApp from './components/CounterApp.jsx'
import ResizerApp from './components/ResizerApp.jsx'

function App() {
  return (
    <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between", }}>
      <CounterApp />
      <ResizerApp />
    </div>
  )
}

export default App
