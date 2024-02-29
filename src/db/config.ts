import mongoose, { Mongoose } from "mongoose";

export default async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!)

        const connection = mongoose.connection

        connection.on('connected', () => {
            console.log("MongoDB connected successfully")
        })

        connection.on('error', (err) => {
            console.log("MongoDB connection has error" + err)
            process.exit()
        })
    } catch (error) {
        console.log("error in connect to db", error)
    }
}