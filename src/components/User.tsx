import {useState} from "react"

type AuthUser = {
    name: string 
    email: string 
}

const User = () => {
    const [user, setUser] =  useState<AuthUser | null >(null)

    const handleLogin = () => {
            setUser({
                name: "CJ",
                email: "abc@gmail.com"
            })
    }
    const handleLogOut = () => {
        setUser(null)
    }
  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogOut}>Logout</button>
        <h3>User name is {user?.name}</h3>
        <h3>User email is {user?.name}</h3>
    </div>
  )
}

export default User