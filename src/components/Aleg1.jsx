import React from 'react';
import "../Stile.css";
const Aleg1 = props => {
    return (
         
         <div class="bg1" style={{ height: "87vh" }}>
          <button onClick={() => props.switchToPage('aleg2')}>Alege 7</button>
          <button onClick={() => props.switchToPage('aleg3')}>Alege 8</button>
        
         </div>
        
    );
};

export default Aleg1;