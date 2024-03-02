"use client"
import axios from 'axios'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'
import toast from 'react-hot-toast'

const varifyPage = () => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const token = searchParams.get("token")

    const verifyMail = async () => {
        try {
            const response = await axios.post('/api/users/verifyemail', { token })
            router.push("/profile")
            toast.success("email is verified successfully")
        } catch (error: any) {
            console.log(error.response.data)
            toast.error("email is not verifyd")
        }
    }
    useEffect(() => {
        verifyMail()
    }, [])
    return (
        <div>varifyPage</div>
    )
}

export default varifyPage