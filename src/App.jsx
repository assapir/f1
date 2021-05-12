import React, { useState } from 'react';
import Clock from './Clock';
import Button from './Button';

export default App = () => {
    const [show, setShow] = useState(true)


    return (
        <div>
            {show && <Clock />}
            <Button onClick={() => setShow(!show)} text={show ? 'Hide' : 'Show'} />
        </div>
    );
}
