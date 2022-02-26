/**
 * @file Declares the Message data type representing relationship between
 * users and messages in terms of a particular user sending a message to another user.
 */
import User from "./User";

/**
 * @typedef Message Represents message relationship between a user and another user,
 * in terms of a particular user sending a message to another user.
 * @property {User} fromUser The sender of the message.
 * @property {User} toUser The receiver of the message.
 * @property {String} message The contents of the message.
 * @property {Date} sentOn The date the message was sent on.
 */
export default interface Message {
    fromUser: User,
    toUser: User,
    message: String,
    sentOn?: Date
}