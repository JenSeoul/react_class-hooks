const React = require('react');

const GugudanHooks = () => {
    const [first, setFirst] = React.useState(Math.ceil(Math.random()*9));
    const [second, setSecond] = React.useState(Math.ceil(Math.random()*9));
    const [value, setValue] = React.useState('');
    const [result, setResult] = React.useState('');
    const inputRef = React.useRef(null);
        
    const onChange = (e) => {
        setValue(e.target.value);
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        if(first*second === parseInt(value)){
            setResult((prevResult)=>`correct:${value}`);
            setFirst(Math.ceil(Math.random()*9));
            setSecond(Math.ceil(Math.random()*9));
            setValue('');
            inputRef.current.focus();
        }
        else{
            setResult(`Incorrect!`);
            setValue('');
            inputRef.current.focus();
        }
    }

    console.log('Rendering');
    return (
                <>
                <div>{first} multiply {second}?</div>
                <form onSubmit={onSubmitForm}>
                  <input ref={inputRef} value={value} onChange={onChange} />
                  <button>Submit Answer</button>
                  </form>
                 <div>{result}</div>
                </>
    )
}

module.exports = GugudanHooks;