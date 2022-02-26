/**
 * @file Implements mongoose schema to CRUD documents in the Message collection.
 */
import mongoose, {Schema} from "mongoose";
import Message from "../models/Message";

/**
 * @typedef Message Represents a particular message being sent.
 * @property {ObjectId} sender Represent the sender of the message.
 * @property {ObjectId} receiver Represents the receiver of the message.
 * @property {ObjectId} message Represents the contents of the message.
 * @property {ObjectId} sentOn Represents the date the message was sent.
 */
const MessageSchema = new mongoose.Schema<Message>({
    sender: {type: Schema.Types.ObjectId, required: true},
    receiver: {type: Schema.Types.ObjectId, required: true},
    message: {type: String, required: true},
    sentOn: {type: Date, default: Date.now()}
})
export default MessageSchema;