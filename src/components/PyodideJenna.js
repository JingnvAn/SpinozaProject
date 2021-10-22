import { useEffect, useRef, useState, } from 'react';

const globalThis = window;

export default function Pyodide({ pythonCode,
                                  loadingMessage = 'loading…',
                                  evaluatingMessage = 'evaluating…' }) {

  const indexURL = 'https://cdn.jsdelivr.net/pyodide/dev/full/'
  const pyodide = useRef(null)
  const [isPyodideLoading, setIsPyodideLoading] = useState(true)
  const [pyodideOutput, setPyodideOutput] = useState(evaluatingMessage)
  const [componentMounted, setComponentMounted] = useState(false);
  const [numRenders, setNumRenders] = useState(0);

  // Note: this is not a super efficient solution. It works, but definitely needs optimizing.
  useEffect(async () => {
    console.log("in useEffect")
    try {
      await window.runitall()
    } catch(e) {
      console.log("Helmet has not executed scripts yet. Incrementing numRenders.")
      setNumRenders(numRenders + 1)
    }
  }, [numRenders])


  return (
    <>
      <div>
        Pyodide Output: {isPyodideLoading ? loadingMessage :
        pyodideOutput}
      </div>
    </>
  )
}
