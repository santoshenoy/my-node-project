/**
 * Defines the MessageDao interface.
 */
import Message from "../models/Message";

/**
 * @file Declares API for Messages related data access object methods.
 */
export default interface MessageDaoI {

    findAllMessagesSentToUser(uid: string): Promise<Message[]>,

    findAllMessagesSentByUser(uid: string): Promise<Message[]>,

    userSendsMessage(senderId: string, receiverId: string, message: Message): Promise<any>,

    userDeletesMessage(messageId: string): Promise<any>
}