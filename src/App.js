import { useState } from 'react';
import './App.css';

function App() {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [result, setResult] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const sum = parseInt(firstNumber) + parseInt(secondNumber);
    setResult(sum);
    setFirstNumber('')
    setSecondNumber('')
    if(!sum){
      alert('NOTHING TO CALCULATE 😥 ')
    }
  };

  return (
    <section className='section'>
      <div className="App">
        <h1>Addition App</h1>
      <form className="form" onSubmit={handleSubmit}>
        <h1>1st Number</h1>
        <input
          type="text"
          placeholder="Amount"
          value={firstNumber}
          onChange={(e) => setFirstNumber(e.target.value.trim())}
          className="input-field"
        />

        <h1>2nd Number</h1>
        <input
          type="text"
          placeholder="Amount"
          value={secondNumber}
          onChange={(e) => setSecondNumber(e.target.value.trim())}
          className="input-field"
        />

        <button type="submit" className="submit-button">
          Calculate
        </button>
        
      <h1>{result}</h1>
      </form>
    </div>
    </section>
  );
}

export default App;
