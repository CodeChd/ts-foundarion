import {useState} from "react"

const LoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] =  useState(false)

    const handleLogin = () => {
        setIsLoggedIn(true)
    }
    const handleLogOut = () => {
        setIsLoggedIn(false)
    }
  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogOut}>Logout</button>
        <h3>User {isLoggedIn ? "Logged In" :  "Logged Out"}</h3>
    </div>
  )
}

export default LoggedIn