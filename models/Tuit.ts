/**
 * @file Declares the Tuit data type model.
 */
import User from "./User";

/**
* @typedef Tuit Represents Tuit data model.
* @property {String} tuit The contents of the tuit.
* @property {User} postedBy The User who posted the tuit.
* @property {Date} postedOn Date when the tuit was posted.
*/
export default interface Tuit {
    tuit: string,
    postedBy: User,
    postedOn?: Date,
};