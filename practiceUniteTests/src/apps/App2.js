import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types'
let i = 0;
const InputControl = React.memo((props) => {
    const {name, label, value, appendToState} = props;

    const [state, setState] = useState(value);
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        setState(value)
    }, [value]);

    useEffect(() => {
        appendToState({name, isValid, value: state})
    }, [state, isValid]);

    let timeout;
    const validate = () => {
        setIsValid(state.length >= 15)
    };

    const handleChange = (event) => {
        setState(event.target.value);

        clearTimeout(timeout);
        timeout = setTimeout(validate, 300)
    };

    const isTouched = state.length > 0;

    return (<>
        <label htmlFor={name}>{label}</label>
        <input
            type="text"
            id={name}
            onChange={handleChange}
            value={state}
        />
        {isTouched && !isValid && "Error bos"}
    </>);
});

InputControl.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    appendToState: PropTypes.func.isRequired
};

const initialState = {
    input1: { name: 'input1', label: 'Label 1', value: '', isValid: false },
    input2: { name: 'input2', label: 'Label 2', value: '', isValid: false },
};

const App2 = () => {
    const [store, setStore] = useState(initialState);
    const [validated, setValidated] = useState(false);

    const addInputToState = (input) => {
        const newState = {...store};
        newState[input.name] = { ...newState[input.name], ...input }
        setStore(newState)
    };

    const isValid = Object.values(store).every(item => item.isValid);

    const handleClick = () => {
        setValidated(true);
        if (isValid) {
            console.log(initialState)
            setStore(initialState);
            setValidated(false)
        }
    };

    return (
        <div className="App">
            <h1>Inputs Practice</h1>
            {
                Object.values(store).map(
                    (item, i) => (<div key={i}>
                        <InputControl name={item.name} label={item.label} value={item.value} appendToState={addInputToState}/>
                    </div>)
                )
            }
            <div>
                <button onClick={handleClick}>Submit</button>
                {validated && !isValid && <span>Inputs are invalid</span>}
            </div>
        </div>
    )
}

export default App2