import React, { useState } from 'react';
// import PropTypes from 'prop-types';


function ColorBoxFun(props) {
    const [color, SetColor] = useState('yellow')
    const [shape, setShape] = useState('square')

    function handleBoxClick() {
        SetColor('green');
    }
    return (
        <div
            className ="color-box"
            style={{ backgroundColor: color, with : '100px', height: '100px' }}
            onClick = {handleBoxClick}
        >
        </div>
    );
}

export default ColorBoxFun;