"use client"
import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

const SignupPage = () => {
    const router = useRouter()
    const [user, setUser] = useState({
        email: '',
        password: '',
        username: ''
    })
    const [btnDisable, setBtnDisable] = useState(false)

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setBtnDisable(false)
        } else {
            setBtnDisable(true)
        }
    }, [user])

    const onSignup = async () => {
        try {
            const response = await axios.post('/api/users/signup', user)
            console.log("singup success ", response.data)
            router.push('/login')
        } catch (error: any) {
            toast.error("error in signup" + error.massege)
        }
    }
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <h1> SignupPage </h1>
            <hr />
            <label htmlFor="username">User Name</label>
            <input
                id="username"
                type="text"
                className="form-input"
                value={user.username}
                onChange={e => setUser({ ...user, username: e.target.value })}
                placeholder="Enter User Name"
            />
            <label htmlFor="email">Email</label>
            <input
                id="email"
                type="email"
                className="form-input"
                value={user.email}
                onChange={e => setUser({ ...user, email: e.target.value })}
                placeholder="Enter your Email"
            />
            <label htmlFor="password">Password</label>
            <input
                id="password"
                type="password"
                className="form-input"
                value={user.password}
                onChange={e => setUser({ ...user, password: e.target.value })}
                placeholder="Enter Password"
            />
            <button onClick={onSignup} className="btn-primary"> {btnDisable ? "No Signup" : "Signup Here"}</button>
            <Link href={"/login"}>Click here to Login</Link>
        </div>
    )
}

export default SignupPage