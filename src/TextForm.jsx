import React, { useState } from 'react';

export default TextForm = ({
    onSubmit,
    label,
    defaultValue = '',
    buttonLabel = 'Submit'
}) => {
    const [value, setValue] = useState(defaultValue);

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <label>
                {label}
                <input type='text' value={value} onChange={handleChange}/>
            </label>
            <input type='submit' value={buttonLabel} />
        </form>
    )
}
