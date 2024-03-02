import mongoose from "mongoose";
import { UserRole } from '@/enums/user-roles'

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: [true, "please provide user name"],
        unique: true,
    },
    email: {
        type: String,
        require: [true, "please provide email"],
        unique: true,
    },
    password: {
        type: String,
        require: [true, "please provide password"],
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    role: {
        type: String,
        enum: UserRole,
        // require: true,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,

})

const User = mongoose.models.User || mongoose.model("User", userSchema)

export default User