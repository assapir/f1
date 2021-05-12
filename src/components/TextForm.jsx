import React, { useState } from 'react';

export default TextForm = ({
    onSubmit,
    label,
    defaultValue = '',
    buttonLabel = 'Submit'
}) => {
    const [value, setValue] = useState(defaultValue);

    const handleChange = e => {
        setValue(e.target.value)
    }

    const handleSubmit = e => {
        const input = e.target[0].value;
        onSubmit(input);
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                {label}
                <input name='textValue' type='text' value={value} onChange={handleChange}/>
            </label>
            <input type='submit' value={buttonLabel} />
        </form>
    )
}
