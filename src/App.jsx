import React, { useState } from 'react';
import Clock from './Clock';
import Button from './Button';
import TextForm from './TextForm';

export default App = () => {
    const [show, setShow] = useState(true)
    const [locale, setLocale] = useState(navigator.language)

    const onLocaleInput = e => {
        setLocale(e.target[0].value);
        e.preventDefault();
    }

    return (
        <div>
            <TextForm label='' onSubmit={onLocaleInput}/>
            {show && <Clock locale={locale} />}
            <Button onClick={() => setShow(!show)} text={show ? 'Hide' : 'Show'} />
        </div>
    );
}
