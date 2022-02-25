import Message from "../models/Message";

export default interface MessageDaoI {
    findAllMessagesUserSent(uid: string): Promise<Message[]>,
    findAllMessagesSentToUser(uid: string): Promise<Message[]>,
    findAllMessagesUserSentToUser(senderUid: string, receiverUid: string): Promise<Message[]>,
    findAllMessagesUserReceivedFromUser(receiverUid: string, senderUid: string): Promise<Message[]>,
    userSendsMessage(senderUid: string, receiverUid: string, message: Message): Promise<any>,
    userDeletesMessage(mid: string): Promise<any>
}