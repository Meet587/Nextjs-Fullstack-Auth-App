"use client"
import Link from "next/link"
import { useState } from "react"

const LoginPage = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const onLogin = async () => {
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
