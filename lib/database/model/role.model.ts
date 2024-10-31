import { Document, model, models, Schema } from "mongoose";

export interface IRole extends Document {
    _id: string
    name: string
}

const RoleSchema = new Schema({
    name: { type: String, required: true },
})

const Role = models.role || model('role', RoleSchema)


export default Role