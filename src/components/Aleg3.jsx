import React from 'react';

const Aleg3 = props => {
    return (
     
      <div class="div1">
            <center>GAME OVER</center>
            <button onClick={() => props.switchToPage('Home')}>Restart</button>
        </div>
        
    );
}

export default Aleg3;