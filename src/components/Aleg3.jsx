import React from 'react';

const Aleg3 = props => {
    return (
        <div className="d-flex container fluid" style={{backgroundColor: 'green'}}>
            
            <h4>Alegerea 3 </h4>
            <button onClick={() => props.switchToPage('aleg5')}>Alege 7</button>
            <button onClick={() => props.switchToPage('aleg6')}>Alege 8</button>
        </div>
        
    );
}

export default Aleg3;