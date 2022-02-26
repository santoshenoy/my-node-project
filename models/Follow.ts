/**
 * @file Declares the Follow data type representing relationship between
 * two different users in terms of a particular user following another user.
 */
import User from "./User";

/**
 * @typedef Follow Represents a follow relationship between a particular user and another user,
 * in terms of a particular user following another user..
 * @property {User} user The user in question.
 * @property {User} followedBy User following the user in question.
 */
export default interface Follow {
    user: User,
    followedBy: User
};