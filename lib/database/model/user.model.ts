import { Document, model, models, Schema } from "mongoose";


export interface IUser extends Document {
    fullName: string
    email: string
    nip: string
    photo: string
    role: { _id: string, name: string }
}


const UserSchema = new Schema({
    clerkId: { type: String, require: true, unique: true },
    firstName: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    username: { type: String, require: true, unique: true },
    photo: { type: String },
    role: { type: Schema.ObjectId, ref: "role" }
})

const User = models.user || model('user', UserSchema)

export default User