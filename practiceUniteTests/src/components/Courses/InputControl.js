import React, {useState} from "react"

const InputControl = (props) => {
    const {addHandler, resetHandler} = props
    const [title, setTitle] = useState('');

    const handleInputChange = (event) => {
        setTitle(event.target.value)
    };

    const handleAdd = () => {
        addHandler(title)
        setTitle('');
    }

    const handleReset = () => {
        resetHandler()
    }

    return (
        <div>
            <input type='text' data-testid="input-course" value={title} onChange={handleInputChange} placeholder={"Please insert course name"}/>
            <button onClick={handleAdd} data-testid="btn-add-course">Add course</button>
            <button onClick={handleReset} data-testid="btn-reset-course">Reset</button>
        </div>
    )
};

export default InputControl
