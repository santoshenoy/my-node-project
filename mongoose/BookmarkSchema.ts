/**
 * @file Implements mongoose schema to CRUD documents in the Bookmarks collection.
 */
import mongoose, {Schema} from "mongoose";
import Bookmark from "../models/Bookmark";

/**
 * @typedef Bookmark Represents a particular tuit being bookmarked by a particular user.
 * @property {ObjectId} tuit Represent the bookmarked tuit.
 * @property {ObjectId} bookmarkedBy Represents the user that bookmarked the tuit.
 */
const BookmarkSchema = new mongoose.Schema<Bookmark>({
    tuit: {type: Schema.Types.ObjectId, ref: "TuitModel"},
    bookmarkedBy: {type: Schema.Types.ObjectId, ref: "UserModel"}
}, {collection: "bookmarks"});
export default BookmarkSchema;