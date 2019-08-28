import React from 'react';
import "../Stile.css";
const Aleg1 = props => {
    return (
         
         <div class="bg1" style={{ height: "87vh" }}>
          <button  onClick={() => props.switchToPage('aleg2')}><Button color="primary" size="sm">Alegere 3</Button>{' '}</button>
          <button onClick={() => props.switchToPage('aleg3')}>Alege 4</button>
        
         </div>
        
    );
};

export default Aleg1;