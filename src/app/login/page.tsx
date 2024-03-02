"use client"
import axios from "axios";
import Link from "next/link"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"
import toast from "react-hot-toast";

const LoginPage = () => {
  const router = useRouter()
  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  const [btnDisable, setBtnDisable] = useState(false)
  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setBtnDisable(false)
    } else {
      setBtnDisable(true)
    }
  }, [user])

  const onLogin = async () => {
    try {
      const response = await axios.post('/api/users/login', user)
      console.log("login success ", response.data)
      toast.success("login success")
      router.push('/profile')
    } catch (error: any) {
      toast.error("error in login" + error.massege)
    }
  }
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1> Login Page </h1>
      <hr />
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
      <button onClick={onLogin} className="btn-primary">Login Here</button>
      <Link href={"/signup"}>Click here to SignUp</Link>
    </div>
  );
};

export default LoginPage;
