import React, { useState } from 'react';

const CounterApp = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{border:"2px solid black", padding:"16px", width:"150px"}}>
      <h3>Counter App</h3>
      <div style={{display:"flex", gap:"8px", width:"150px", justifyContent:"center"}}>
        <button id="plus" onClick={()=>setCount(count+1)}>+</button>
        <button id="minus" onClick={()=>setCount(count-1)}>-</button>
      </div>
      <span style={{fontSize:"20px", display:"block", marginTop:"8px"}}>
        {count}
      </span>
    </div>
  );
};

export default CounterApp;