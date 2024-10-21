import { model, models, Schema } from "mongoose";

const RoleSchema = new Schema({
    _id: { type: String, require: true, unique: true },
    name: { type: String, require: true },
})

const Role = models.role || model('role', RoleSchema)