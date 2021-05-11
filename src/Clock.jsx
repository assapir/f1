import React, { useState, useEffect } from 'react';

export default Clock = () => {
    const [date, setDate] = useState(new Date())

    const tick = () => {
        setDate(new Date);
    }

    useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    })

    return (
        <h1>It is {date.toLocaleTimeString(navigator.languages)}</h1>
    )
}
