import React from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

function Home() {
  return <h1>This is the Home Page!</h1>
}

function About() {
  return <h1>This is the About Us Page!</h1>
}

function Contact() {
  return <h1>This is the Contact Us Page!</h1>
}

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
          <div style={{border:"2px solid black", margin:"2px", height:"35px", width:"180px"}}><Link to="/">HOME</Link></div>
          <div style={{border:"2px solid black", margin:"2px", height:"35px", width:"180px"}}><Link to="/about">ABOUT US</Link></div>
          <div style={{border:"2px solid black", margin:"2px", height:"35px", width:"180px"}}><Link to="/contactus">CONTACT US</Link></div>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App