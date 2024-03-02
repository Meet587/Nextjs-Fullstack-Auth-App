import { getDataFomeToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import connect from '@/db/config'
import User from "@/models/users.model"

connect()

export async function GET(request: NextRequest) {
    try {
        const userId = await getDataFomeToken(request)
        const user = await User.findById({ _id: userId }).select("-password")

        return NextResponse.json({ massege: "User found", data: user }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({ "massege": error.massege }, { status: 500 })
    }
}