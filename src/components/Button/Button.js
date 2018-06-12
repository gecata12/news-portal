import React from 'react';
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

export default Button;