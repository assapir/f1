import React, { useState } from 'react';
import Clock from './components/Clock';
import Button from './components/Button';
import TextForm from './components/TextForm';

export default App = () => {
    const [show, setShow] = useState(true)
    const [locale, setLocale] = useState(navigator.language)

    const onLocaleInput = input => {
        setLocale(input);
    }

    return (
        <div>
            <TextForm label='' onSubmit={onLocaleInput}/>
            {show && <Clock locale={locale} />}
            <Button onClick={() => setShow(!show)} text={show ? 'Hide' : 'Show'} />
        </div>
    );
}
