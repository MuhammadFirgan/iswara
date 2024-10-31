import { Document, Schema } from "mongoose";


export interface IAudio extends Document {
    _id: string
    title: string
    description?: string
    voiceType: string
    prompt: string
    imgUrl?: string
    podcaster: { _id: string, firstName: string, lastName: string, photo: string },
    
}

const AudioSchmea = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    voiceType: { type: String, require: true },
    prompt: { type: String, require: true },
    imgUrl: { type: String },
    podcaster: { _id: Schema.Types.ObjectId, ref: "User" },
    

})