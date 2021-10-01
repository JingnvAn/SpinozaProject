import '../css/Container.css';

function Container() {
  return (
    <div className="Container">
      <h1>Spinoza</h1>
      <br />
      
      <textarea id="1" name="1" rows="4" cols="50">
        This is the first textarea in the Container component.
      </textarea>
      <textarea id="2" name="2" rows="4" cols="50">
        This is the second textarea in the Container component.
      </textarea>
      <button>Run</button>
    </div>
  );
}

export default Container;
