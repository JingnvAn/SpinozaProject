import '../css/Container.css';

function Container() {
  return (
    <div className="Container">
      <h1>Spinoza</h1>
      <br />

      <textarea id="1" name="1" rows="4" cols="50"
        value="This is the first textarea in the Container component."/>

      <textarea id="2" name="2" rows="4" cols="50"
        value="This is the second textarea in the Container component."/>

      <button onClick={() => {
        console.log('clicked the run button')
        window.code.value = "print('Hello World')"
        window.evaluatePython()
      }}>Run</button>
    </div>
  );
}

export default Container;
