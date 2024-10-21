import { model, models, Schema } from "mongoose";

const UserSchema = new Schema({
    clerkId: { type: String, require: true, unique: true },
    fullName: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    nip: { type: String, require: true, unique: true },
    photo: { type: String, require: true }
})

const User = models.user || model('user', UserSchema)

export default User