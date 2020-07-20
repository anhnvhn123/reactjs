import React from 'react';
import PropTypes from 'prop-types';

Test.propTypes = {
    color : PropTypes.string,
    onClick : PropTypes.func,
};

Test.default = {
    color : "yellow",
    onClick : null
}

function Test(props) {
    return (
        <div>
            
        </div>
    );
}

export default Test;