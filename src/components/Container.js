import { useState } from 'react';
import '../css/Container.css';

export default function Container() {
  const [input, setInput] = useState(`print('Hello Jenna!')`);

  return (
    <div className="Container">
      <h1>Spinoza</h1>
      <br />

      <textarea id="1" name="1" rows="4" cols="50"
        placeholder={input}
        onChange={((e) => {
          console.log('set input: ', e.target.value)
          setInput(e.target.value)
        })} />

      <textarea id="2" name="2" rows="4" cols="50"
        placeholder="Output goes here" 
        />

      <button onClick={() => {
        console.log('clicked the run button')
        window.code.value = input || ''
        window.evaluatePython()
      }}>Run</button>
    </div>
  );
}
