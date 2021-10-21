function runitall() {
    console.log("running the testpy2.js script")
    const output = {value:""}
    const code = {value:"print(23*27); 19*6"}
    window.output = output
    window.code = code
    window.main = main
    window.evaluatePython = evaluatePython

    function addToOutput(s) {
      output.value = s;
      console.log('>>> '+output.value)
    }

    output.value = "Initializing...\n";
    // init Pyodide
    async function main() {
      let pyodide = await loadPyodide({
        indexURL: "https://cdn.jsdelivr.net/pyodide/v0.18.1/full/",
      });
      output.value += "Ready!\n";
      return pyodide;
    }
    let pyodideReadyPromise = main();

    async function evaluatePython() {
      let pyodide = await pyodideReadyPromise;
      window.pyodide = pyodide
      try {
        console.dir(output)
        console.dir(code)
        let output0 = pyodide.runPython(code.value);
        console.log('++++ '+output0)
        console.dir(output)
        console.dir(code)
        addToOutput(output0);
      } catch (err) {
        addToOutput(err);
      }
    }
    window.evaluatePython = evaluatePython
  }
window.runitall = runitall
console.log("loaded runitall")  
