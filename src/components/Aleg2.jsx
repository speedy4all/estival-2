import React from 'react';

const Aleg2 = props => {
    return (
        <div className="d-flex container fluid" style={{backgroundColor: 'green'}}>
            
            <h4>Alegerea 2 </h4>
            <button onClick={() => props.switchToPage('aleg3')}>Alege 3</button>
            <button onClick={() => props.switchToPage('aleg4')}>Alege 4</button>
        </div>
        
    );
}

export default Aleg2;