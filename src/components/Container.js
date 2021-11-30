import React, { useEffect, useState } from "react";
import Firebase from "firebase";
import '../css/Container.css';

const reset = (target) => {
  target.value = ""
}

export default function Container() {
  const [input, setInput] = useState(`print('Hello World!')`);
  const [userEmail, setUserEmail] = useState();

  useEffect(() => {
    // TODO: update to pull down actual email from logged in user
    // We aren't allowed to have periods in the key, maybe try to
    // encrypt/decrypt the email to just a regular string to use
    // it at a key. Or, have the user create a username and user that instead.
    // const tempUser = window.userEmail ? window.userEmail : "test-name"
    const tempUser = "test-name"
    setUserEmail(tempUser)
  }, [])

  return (
    <div className="Container">
      <h1>Spinoza</h1>
      <h5>Welcome, {userEmail}</h5>
      <br />

      <textarea id="1" name="1" rows="4" cols="50"
        placeholder={input}
        onChange={((e) => {
          setInput(e.target.value)
        })} />

      <textarea id="2" name="2" rows="4" cols="50"
        placeholder="Output goes here" />

      <textarea id="3" name="3" rows="4" cols="50"
        placeholder="This is the console to display standard Output" />

      <button onClick={async () => {
        console.log('clicked the run button')
        window.code.value = input
        await window.evaluatePython()
        document.getElementById('2').value = window.output.value
        document.getElementById('3').value = window.stdout.value
      }}>Run</button>


      <br />
      <button onClick={async () => {
        console.log("saving this input to database: ", input)
        console.log("currently logged in with email: ", userEmail)
        Firebase.database().ref(userEmail).set(input)
      }}>Save Input Progress</button>

      <br />
      <button onClick={async () => {
        console.log("restore progress clicked")
        console.log("userEmail in restore onClick", userEmail)
        let ref = Firebase.database().ref(userEmail)
        ref.on("value", snapshot => {
          const restoredInput = snapshot.val()
          console.log("restoredInput: ", restoredInput)
          setInput(restoredInput)
        });

      }}>Restore Input Progress</button>
    </div>
  );
}
