import React, {useState} from "react";

const Btn = (props) => {
    const { index, callback } = props
console.log('btn render')
    const handleClick = (event) => {
        callback(`text from child component ${index}`)
    }

    return (
        <button
            onClick={handleClick}
        >
            Push {index}
        </button>
    )
}

const App1 = () => {
    const [store, setStore] = useState(['test', 'sda'])
console.log("render")
    const addItemToStore = (item) => {
        setStore([...store, item])
    }

    return (
        <div className="App">
            <h1>App1</h1>
            <div>
                {store.map((item, i) => <p key={i}>{item}</p>)}
            </div>
            <Btn index={1} callback={addItemToStore} />
            <Btn index={2} callback={addItemToStore} />
        </div>
    )
}

export default App1
