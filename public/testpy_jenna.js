const runitall = () => {
  console.log("running the testpy_jenna.js script")
  const output = {value:""}
  const code = {value:"print(23*27); 19*6"}
  const stdout = {value:""}
  window.output = output
  window.code = code
  window.stdout = stdout

  // window.consoleOutput = consoleOutput
  window.main = main
  window.evaluatePython = evaluatePython

  const addToOutput = (s) => {
    console.log("in addToOutput. s:", s)
    output.value = s;
    console.log('>>> ' + output.value)
  }
  const addToStdOut = (s) => {
    console.log("in addToStdOut. s:", s)
    stdout.value = s;
    console.log('>>> ' + stdout.value)
  }
  const reset = (target) => {
    target.value = "";
  }

  output.value = "Initializing...\n";
  let paragraph = document.getElementById("p");

  // init Pyodide
  async function main() {
    console.log(window)
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
      pyodide.runPython(`
          import sys
          import io
          sys.stdout = io.StringIO()
      `);

      // This only returns a value if the result of the python expression returns a value
      // For example, if we are trying to print("hello world") the result will be
      // undefined but the correct output will be printed in the console.
      // Solution: set up a method for capturing pyodide's output stream when
      // result of python expression is undefined
      reset(window.output);
      reset(window.stdout);
      console.log(code.value)
      let result = pyodide.runPython(code.value);
      let stdout = pyodide.runPython("sys.stdout.getvalue()")
      console.log("result: ", result);
      console.log("stdout: ",stdout)

      // If expression evaluates to a certain result, we update output, otherwise update stdout
      if (stdout) {
        var div = document.createElement('div');
        div.innerText = stdout;
        document.body.appendChild(div);
        addToStdOut(stdout)
      } 
      if (result){
        var div = document.createElement('div');
        div.innerText = result
        document.body.appendChild(div)
        addToOutput(result);
      }

    } catch (err) {
      addToOutput(err);
    }
  }

  window.evaluatePython = evaluatePython
}


window.runitall = runitall
console.log("loaded runitall")
