import React, { useState } from "react";
import Container from './Container';
import Pyodide from './PyodideJenna';
import { useAuth } from '../context/AuthContext'
import { Link, useHistory } from "react-router-dom"

const pythonString = 'print()'

export default function Combination() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/")
    } catch {
      setError("Failed to log out")
    }
  }
    return (
        <>
            <button onClick={handleLogout}>Log out</button>
            <Container/>
            <Pyodide pythonCode={pythonString}/>
        </>
    )
}