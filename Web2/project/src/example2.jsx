import React, { useState, useEffect} from 'react';

const Example2 = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <h1>Example 2</h1>
            {isVisible && <p>Un'altro semplice esempio di codice JSX</p>}
        </div>
    );
};

export default Example2;