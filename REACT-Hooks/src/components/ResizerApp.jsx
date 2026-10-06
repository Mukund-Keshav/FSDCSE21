import React, { useState } from 'react';
import catImg from '../assets/cat.jpg';

const ResizerApp = () => {
  const [h, setHeight] = useState(100);
  const [w, setWidth] = useState(100);

  return (
    <div style={{border:"2px solid black", padding:"10px", width:"600px", height:"600px"}}>
      <h3>Resizer App</h3>
      <div style={{display:"flex", gap:"8px", width:"600px", justifyContent:"center", flexWrap:"wrap"}}>
        <button onClick={()=>setHeight(h+10)} style={{width:'100px'}}>Height+</button>
        <button onClick={()=>setHeight(h-10)} style={{width:'100px'}}>Height-</button>
        <button onClick={()=>setWidth(w+10)} style={{width:'100px'}}>Width+</button>
        <button onClick={()=>setWidth(w-10)} style={{width:'100px'}}>Width-</button>
        <p>Height:{h}px, Width:{w}px</p>
      </div>
      <img style={{width:w, height:h}} src={catImg} alt="Cat" />
    </div>
  );
};

export default ResizerApp;