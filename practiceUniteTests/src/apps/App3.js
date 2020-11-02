import React, {useState} from "react";

const App3 = () => {
    console.log('app3')
    const [text, setText] = useState('text');
    const [value, setValue] = useState('value');
    return (
        <>
            {text}
            {value}
        </>
    )
};

export default App3