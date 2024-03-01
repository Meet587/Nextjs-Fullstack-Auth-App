import connect from '@/db/config'
import User from "@/models/users.model"
import { NextRequest, NextResponse } from 'next/server'
import bcryptjs from 'bcryptjs'


connect()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const { username, password, email } = reqBody

        console.log(reqBody)
        const user = await User.findOne({ email })

        if (user) {
            return NextResponse.json({ error: "user alredy exist" }, { status: 400 })
        }

        const salt = await bcryptjs.genSalt(10)
        const hashePassword = await bcryptjs.hash(password, salt)


        //create new user
        const newUser = new User({
            email,
            username,
            password: hashePassword,
        })

        const savedUser = await newUser.save()
        console.log(savedUser)

        return NextResponse.json({ massege: "user created successfully", success: true, savedUser }, { status: 201 })


    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}