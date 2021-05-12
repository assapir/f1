import React, { useState, useEffect } from 'react';

export default Clock = ({ locale = navigator.language }) => {
const [date, setDate] = useState(new Date())

    const tick = () => {
        setDate(new Date);
    }

    useEffect(() => {
        const timerId = setInterval(tick, 1000);
        return () => clearInterval(timerId);
    }, [])

    return (
        <h1>It is {date.toLocaleString(locale)} on locale <strong>{locale}</strong></h1>
    )
}
