import { NextRequest } from "next/server";
import jwt from "jsonwebtoken"

interface UserData {
    id: string,
    username: string,
    email: string
}

export const getDataFomeToken = async (request: NextRequest) => {
    try {
        const token = await request.cookies.get("token")?.value || ""

        const userData: any = await jwt.verify(token, process.env.TOKEN_SECRET!)

        return userData.id

    } catch (error) {
        console.log(error)
    }
}