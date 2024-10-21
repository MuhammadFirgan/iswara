import { Document, Schema } from "mongoose";


export interface IAudio extends Document {
    _id: string
    title: string
    description?: string
    voiceType: string
    prompt: string
    imgUrl?: string
    podcaster: { _id: string, firstName: string, lastName: string, photo: string },
    role: { _id: string, name: string }
}

const AudioSchmea = new Schema({
    _id: { type: String, require: true, unique: true },
    title: { type: String, required: true },
    description: { type: String },
    voiceType: { type: String, require: true },
    prompt: { type: String, require: true },
    imgUrl: { type: String },
    podcaster: { _id: Schema.Types.ObjectId, ref: "User" },
    role: { _id: Schema.Types.ObjectId, ref: "Role", default: 'Guru' }

})