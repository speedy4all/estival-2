import React from 'react';
import "../Stile.css";
const Aleg2 = props => {
    return (
        <div class="bg1" style={{ height: "87vh" } }>
            <button onClick={() => props.switchToPage('aleg3')}>Alege 1</button>
            <button onClick={() => props.switchToPage('aleg4')}>Alege 2</button>
        </div>
        
    );
}

export default Aleg2;