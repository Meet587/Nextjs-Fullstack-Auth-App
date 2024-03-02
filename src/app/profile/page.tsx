"use client"

import axios from "axios"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

const ProfilePage = () => {
    const router = useRouter()
    const [user, setUser] = useState("nothing")

    const onLoguot = async () => {
        try {
            const response = await axios.get("/api/users/logout")
            router.push('/login')
        } catch (error: any) {
            console.log(error.massege)
            toast.error(error.massege)
        }
    }

    const getProfile = async () => {
        try {
            const response = await axios.get("/api/users/me")
            console.log(response.data.data)
            setUser(response.data.data.username)
        } catch (error: any) {
            console.log(error.massege)
            toast.error(error.massege)
        }
    }
    useEffect(() => {
        getProfile()
    }, [])
    return (
        <div className='min-h-screen flex flex-col items-center justify-center py-2'>
            <h1>Profile</h1>
            <hr />
            <p>Profile Page</p>
            <hr />
            <h4>{user}</h4>
            <hr />
            <button onClick={onLoguot} className="btn-blue">Log out</button>
        </div>
    )
}

export default ProfilePage