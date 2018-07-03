import React from 'react';
import PropTypes from 'prop-types';

import Toggle from 'react-toggle';
import 'react-toggle/style.css';

const Switch = (props) => {
    const { defaultChecked, onStateChange } = props;
    return (
        <label>
            <span>Hide all buttons</span>
            <Toggle
                defaultChecked={defaultChecked}
                onChange={onStateChange}/>
        </label>
    );
};

Switch.propTypes = {
    defaultChecked: PropTypes.bool,
    onStateChange: PropTypes.func
};

Switch.defaultProps = {
    defaultChecked: false,
    onStateChange: () => {}
};

export default Switch;