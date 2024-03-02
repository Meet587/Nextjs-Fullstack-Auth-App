import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = NextResponse.json(
            { massege: "Logout Successfull", success: true },
            { status: 200 }
        )

        response.cookies.set("token", "", { httpOnly: true, expires: new Date(0) })

        return response
        
    } catch (error: any) {
        return NextResponse.json({ "massege": error.massege }, { status: 500 })
    }
}