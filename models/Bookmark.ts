/**
 * @file Declares the Bookmark data type representing relationship between
 * users and tuits in terms of a particular user bookmarking a particular tuit.
 */
import Tuit from "./Tuit";
import User from "./User";

/**
 * @typedef Bookmark Represents bookmarks relationship between a user and a tuit,
 * in terms of a particular user bookmarking a particular tuit.
 * @property {Tuit} tuit Tuit being bookmarked.
 * @property {User} bookmarkedBy User bookmarking the tuit.
 */
export default interface Bookmark {
    tuit: Tuit,
    bookmarkedBy: User
};