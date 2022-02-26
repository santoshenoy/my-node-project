/**
 * @file Implements DAO managing data storage of messages. Uses mongoose MessageModel
 * to integrate with MongoDB.
 */
import Message from "../models/Message";
import MessageDaoI from "../interfaces/MessageDaoI";
import MessageModel from "../mongoose/MessageModel";

/**
 * @class MessageDao Implements Data Access Object managing data storage
 * of Messages.
 * @property {MessageDao} messageDao Private single instance of MessageDao.
 */
export default class MessageDao implements MessageDaoI {
    private static messageDao: MessageDao | null = null;

    /**
     * Create a singleton Message DAO instance.
     * @return MessageDao
     */
    public static getInstance = (): MessageDao => {
        if (MessageDao.messageDao == null) {
            MessageDao.messageDao = new MessageDao();
        }
        return MessageDao.messageDao;
    }
    private constructor() {}

    /**
     * Uses MessageModel to retrieve all messages that a particular user sent.
     * @param {string} uid user's primary key.
     */
    findAllMessagesSentByUser = async (uid: string): Promise<Message[]> =>
        MessageModel.find({from: uid});

    /**
     * Uses MessageModel to retrieve all messages that were sent to a particular user.
     * @param {string} uid user's primary key.
     */
    findAllMessagesSentToUser = async (uid: string): Promise<Message[]> =>
        MessageModel.find({toUser: uid});

    /**
     * Uses MessageModel to record a particular user sending a message to another user.
     * @param {string} senderId sender's primary key.
     * @param {string} receiverId receiver's primary key.
     */
    userSendsMessage = async (senderId: string, receiverId: string, message: Message): Promise<any> =>
        MessageModel.create({...message,from: senderId, to: receiverId});

    /**
     * Uses MessageModel to record a particular user deleting a particular message.
     * @param {string} messageId message's primary key
     */
    userDeletesMessage = async (messageId: string): Promise<any> =>
        MessageModel.deleteOne({_id: messageId});
}