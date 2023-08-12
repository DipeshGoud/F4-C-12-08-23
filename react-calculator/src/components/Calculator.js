import React, { useState } from 'react';

const Calculator = () => {
    // State variables to store input values, result, and output messages
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');
    const [output, setOutput] = useState('');
    const [resultType, setResultType] = useState('')
    // Function to validate input values
    const validateInputs = () => {
        if (num1 === '' && num2 === '') {
            setResult('Error!');
            setOutput('Both numbers are required.');
            setResultType('error')
            return false;
        }
        if (num1 === '') {
            setResult('Error!');
            setOutput('Num1 numbers are required.');
            setResultType('error')
            return false;
        }
        if (num2 === '') {
            setResult('Error!');
            setOutput('Num2 numbers are required.');
            setResultType('error')
            return false;
        }
        if(isNaN(num1) || isNaN(num2)) {
            setResult('Error!');
            setOutput('Enter valid numbers.');
            setResultType('error');
            return false;
        }
        setOutput('');
        setResult('Success!');
        setResultType('success')
        return true;
    };

    // Function to calculate and display the result
    const calculateResult = (operator) => {
        if (!validateInputs()) return;

        switch (operator) {
            case '+':
                setOutput('Result: ' + (parseFloat(num1) + parseFloat(num2)).toString());
                break;
            case '-':
                setOutput('Result: ' + (parseFloat(num1) - parseFloat(num2)).toString());
                break;
            case '*':
                setOutput('Result: ' + (parseFloat(num1) * parseFloat(num2)).toString());
                break;
            case '/':
                setOutput('Result: ' + (parseFloat(num1) / parseFloat(num2)).toString());
                break;
            default:
                setResult(''); 
        }
    };

    return (
        <div className="calculator">
            <h1>React Calculator</h1>
            <input type="text" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder='Enter Num1' />
            <input type="text" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder='Enter Num2'/>
            <div className='buttonContainer'>
            <button onClick={() => calculateResult('+')}>+</button>
            <button onClick={() => calculateResult('-')}>-</button>
            <button onClick={() => calculateResult('*')}><span>*</span></button>
            <button onClick={() => calculateResult('/')}>/</button>
            </div>
            <div className={`result ${resultType}`}>{result}</div>
            <div className="output">{output}</div>
        </div>
    );
}; 

export default Calculator;
