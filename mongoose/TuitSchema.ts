/**
 * @file Implements mongoose schema to CRUD documents in the Tuit collection.
 */
import mongoose, {Schema} from "mongoose";
import Tuit from "../models/Tuit";

/**
 * @typedef Tuit Represents the Tuit model.
 * @property {ObjectId} tuit Represents the particular tuit.
 * @property {ObjectId} postedBy Represents the user that posted the tuit.
 * @property {ObjectId} postedOn Represents the date the tuit was posted on.
 */
const TuitSchema = new mongoose.Schema<Tuit>({
    tuit: {type: String, required: true},
    postedBy: {type: Schema.Types.ObjectId, ref: "UserModel"},
    postedOn: {type: Date, default: Date.now},
    // @ts-ignore
    stats: {
        replies: {type: Number, default: 0},
        retuits: {type: Number, default: 0},
        likes: {type: Number, default: 0},
        dislikes: {type: Number, default: 0}
    }
}, {collection: "tuits"});
export default TuitSchema;