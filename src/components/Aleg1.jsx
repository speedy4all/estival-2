import React from 'react';

const Aleg1 = props => {
    return (
        <div>
            <div className="d-flex container fluid" style={{ backgroundColor: 'green' }}>Alegerea cu numarul 1</div>
            <button onClick={() => props.switchToPage('aleg2')}>Alege 2</button>
            <button onClick={() => props.switchToPage('aleg3')}>Alege 3</button>
        </div>
    );
}

export default Aleg1;