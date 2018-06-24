import React from 'react';
import PropTypes from 'prop-types';

import './_button.scss';

const Button = (props) => {
    const {isDisabled, onButtonClick, label, className} = props;

    return (
        <button
            disabled={isDisabled}
            onClick={onButtonClick}
            className={className}
        >
            {label}
        </button>
    );
};

Button.propTypes = {
    isDisabled: PropTypes.bool,
    onButtonClick: PropTypes.func,
    label: PropTypes.string,
    className: PropTypes.string
};

Button.defaultProps = {
    isDisabled: false,
    onButtonClick: () => {},
    label: 'Button',
    className: ''
};

export default Button;