import React from 'react';

export default Button = ({onClick, text}) => {
    return (
        <button onClick={onClick}>{text}</button>
    )
}
