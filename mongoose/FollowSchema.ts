/**
 * @file Implements mongoose schema to CRUD documents in the Follows collection.
 */
import mongoose, {Schema} from "mongoose";
import Follow from "../models/Follow";

/**
 * @typedef Follows Represents users being able to follow each other.
 * @property {ObjectId} user Represent the user in question.
 * @property {ObjectId} followedBy Represents the users who follow the user in question.
 */
const FollowSchema = new mongoose.Schema<Follow>({
    user: {type: Schema.Types.ObjectId, ref: "FollowModel"},
    followedBy: {type: Schema.Types.ObjectId, ref: "FollowModel"}
}, {collection: "follows"});
export default FollowSchema;