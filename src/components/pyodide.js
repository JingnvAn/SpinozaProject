import {createContext,  useContext, useEffect, useState } from 'react'
import Head from '../containers/head'
// import { PyodideContext } from '../containers/pyodide-provider'
const PyodideContext = createContext()
export default function Pyodide({
  id,
  pythonCode,
  loadingMessage = 'loading...',
  evaluatingMessage = 'evaluating...'
}) {
  const indexURL = 'https://cdn.jsdelivr.net/pyodide/dev/full/'
  console.log('PyodideContext =')
  console.log(PyodideContext)
  alert("we're running the code")
  alert(`PC = ${PyodideContext}`)

  const  pc = useContext(PyodideContext)
  alert( `pc=${pc}`)
  console.log(`keys = ${JSON.stringify(Object.keys(pc))}`)
  // {
  //   pyodide,
  //   hasLoadPyodideBeenCalled,
  //   isPyodideLoading,
  //   setIsPyodideLoading
  // }
  return (
    <>
      <Head>
        <script src={`${indexURL}pyodide.js`} />
      </Head>
      <div id={id}>
        Pyodide Output: not working yet
      </div>
    </>
  )
  // const [pyodideOutput, setPyodideOutput] = useState(evaluatingMessage)
  //
  // // load pyodide wasm module and initialize it
  // useEffect(() => {
  //   if (!hasLoadPyodideBeenCalled.current) {
  //     // immediately set hasLoadPyodideBeenCalled ref, which is part of context, to true
  //     // this prevents any additional Pyodide components from calling loadPyodide a second time
  //     hasLoadPyodideBeenCalled.current = true
  //     ;(async function () {
  //       pyodide.current = await window.loadPyodide({ indexURL })
  //       // updating value of isPyodideLoading triggers second useEffect
  //       setIsPyodideLoading(false)
  //     })()
  //   }
  //   // pyodide and hasLoadPyodideBeenCalled are both refs and setIsPyodideLoading is a setState function (from context)
  //   // as a result, these dependencies will be stable and never cause the component to re-render
  // }, [pyodide, hasLoadPyodideBeenCalled, setIsPyodideLoading])
  //
  // // evaluate python code with pyodide and set output
  // useEffect(() => {
  //   if (!isPyodideLoading) {
  //     const evaluatePython = async (pyodide, pythonCode) => {
  //       try {
  //         return await pyodide.runPython(pythonCode)
  //       } catch (error) {
  //         console.error(error)
  //         return 'Error evaluating Python code. See console for details.'
  //       }
  //     }
  //     ;(async function () {
  //       setPyodideOutput(await evaluatePython(pyodide.current, pythonCode))
  //     })()
  //   }
  //   // component re-renders when isPyodideLoading changes, which is set with first useEffect and updated via context
  // }, [isPyodideLoading, pyodide, pythonCode])
  //
  // return (
  //   <>
  //     <Head>
  //       <script src={`${indexURL}pyodide.js`} />
  //     </Head>
  //     <div id={id}>
  //       Pyodide Output: {isPyodideLoading ? loadingMessage : pyodideOutput}
  //     </div>
  //   </>
  // )
}
