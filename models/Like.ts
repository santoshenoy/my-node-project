/**
 * @file Declares the Like data type representing relationship between
 * users and tuits in terms of a particular user liking a particular tuit.
 */
import Tuit from "./Tuit";
import User from "./User";

/**
 * @typedef Like Represents likes relationship between a user and a tuit,
 * in terms of a particular user liking a particular tuit.
 * @property {Tuit} tuit Tuit being liked.
 * @property {User} likedBy User liking the tuit.
 */
export default interface Like {
    tuit: Tuit,
    likedBy: User
};