/**
 * @file Implements mongoose schema to CRUD documents in the Likes collection.
 */
import mongoose, {Schema} from "mongoose";
import Like from "../models/Like";

/**
 * @typedef Like Represents a particular tuit being liked by a particular user.
 * @property {ObjectId} tuit Represent the liked tuit.
 * @property {ObjectId} likedBy Represents the user that liked the tuit.
 */
const LikeSchema = new mongoose.Schema<Like>({
    tuit: {type: Schema.Types.ObjectId, ref: "TuitModel"},
    likedBy: {type: Schema.Types.ObjectId, ref: "UserModel"},
}, {collection: "likes"});
export default LikeSchema;