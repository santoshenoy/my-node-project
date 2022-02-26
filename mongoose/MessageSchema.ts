/**
 * @file Implements mongoose schema to CRUD documents in the Message collection.
 */
import mongoose, {Schema} from "mongoose";
import Message from "../models/Message";

/**
 * @typedef Message Represents the message being sent.
 * @property {ObjectId} fromUser Represent the sender of the message.
 * @property {ObjectId} toUser Represents the receiver of the message.
 * @property {ObjectId} message Represents the contents of the message.
 * @property {ObjectId} sentOn Represents the date the message was sent.
 */
const MessageSchema = new mongoose.Schema<Message>({
    fromUser: {type: Schema.Types.ObjectId, required: true},
    toUser: {type: Schema.Types.ObjectId, required: true},
    message: {type: String, required: true},
    sentOn: {type: Date, default: Date.now()}
}, {collection: "messages"})
export default MessageSchema;