import { useState } from 'react';
import '../css/Container.css';

const reset = (target) => {
  target.value = ""
}
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
        placeholder="Output goes here" />
      
      <textarea id="3" name="3" rows="4" cols="50"
        placeholder="This is the console to display standard Output" />

      <button onClick={async() => {
        console.log('clicked the run button')
        window.code.value = input
        reset(window.output)
        reset(window.stdout)
        await window.evaluatePython()
        document.getElementById('2').value = window.output.value
        document.getElementById('3').value = window.stdout.value
      }}>Run</button>
    </div>
  );
}
