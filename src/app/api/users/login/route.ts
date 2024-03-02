import connect from '@/db/config'
import User from "@/models/users.model"
import { NextRequest, NextResponse } from 'next/server'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'


connect()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const { email, password } = reqBody

        const user = await User.findOne({ email })
        if (!user) {
            return NextResponse.json({ "massege": "User not found" },
                { status: 404 })
        }

        const validatePasswor = bcryptjs.compare(password, user.password)

        if (!validatePasswor) {
            return NextResponse.json({ "massege": "Invalid password" },
                { status: 400 })
        }

        const userData = {
            id: user._id,
            email: user.email,
            username: user.username
        }

        const token = await jwt.sign(userData, process.env.TOKEN_SECRET!, { expiresIn: '1d' })

        const response = NextResponse.json({ masssege: "Login Successfull", success: true }, { status: 200 })

        response.cookies.set("token", token, { httpOnly: true })

        return response;

    } catch (error: any) {
        return NextResponse.json({ "massege": error.massege }, { status: 500 })
    }
}