/**
 * @file Controller RESTful Web service API for Messages resource.
 */
import {Request, Response, Express} from "express";
import MessageDao from "../daos/MessageDao";
import MessageControllerI from "../interfaces/MessageControllerI";

/**
 * @class MessageController Implements RESTful web service API for messages resource.
 * Defines the following HTTP endpoints:
 * <ul>
 *     <li>GET /api/users/:tid/messagesReceived to retrieve all messages received by a user</li>
 *     <li>GET /api/users/:uid/messagesSent to retrieve all messages sent by a user</li>
 *     <li>POST /api/users/:senderUid/messages/:receiverUid to record that a user messaged another user</li>
 *     <li>DELETE /api/messages/:mid to delete a message</li>
 * </ul>
 * @property {MessageDao} messageDao Singleton DAO implementing messages CRUD operations.
 * @property {MessageController} messageController Singleton controller implementing RESTful web service API.
 */
export default class MessageController implements MessageControllerI {
    private static messageDao: MessageDao = MessageDao.getInstance();
    private static messageController: MessageController | null = null;

    /**
     * Create a singleton message controller instance.
     * @param {Express} app Express instance to declare the RESTful web service API.
     * @return MessageController
     */
    public static getInstance = (app: Express) : MessageController => {
        if (MessageController.messageController == null) {
            MessageController.messageController = new MessageController();
            app.get("/api/users/:uid/messagesReceived", MessageController.messageController.findAllMessagesSentToUser);
            app.get("/api/users/:uid/messagesSent", MessageController.messageController.findAllMessagesSentByUser);
            app.post("/api/users/:senderId/messages/:receiverId", MessageController.messageController.userSendsMessage);
            app.delete("/api/messages/:messageId", MessageController.messageController.userDeletesMessage);
        }
        return MessageController.messageController;
    }
    private constructor() {}

    /**
     * Retrieves all messages sent to a particular user, from the database.
     * @param {Request} req Represents the request from the client, including the path parameter uid representing the "receiving" user.
     * @param {Response} res Represents the response to the client, including the body as a JSON containing the messages.
     */
    findAllMessagesSentToUser = (req: Request, res: Response) =>
        MessageController.messageDao.findAllMessagesSentToUser(req.params.uid)
            .then(messages => res.json(messages));

    /**
     * Retrieves all messages sent by a particular user, from the database
     * @param {Request} req Represents the request from the client, including the path parameter uid representing the "sending" user.
     * @param {Response} res Represents the response to the client, including the body as a JSON containing the messages.
     */
    findAllMessagesSentByUser = (req: Request, res: Response) =>
        MessageController.messageDao.findAllMessagesSentByUser(req.params.uid)
            .then(messages => res.json(messages));

    /**
     * Records a particular user sending a message to another user.
     * @param {Request} req Represents the request from the client, including the path parameters senderId and receiverId representing
     * sender and the receiver respectively.
     * @param {Response} res Represents the response to the client, including the body as a JSON containing the new message.
     */
    userSendsMessage(req: Request, res: Response) {
        MessageController.messageDao.userSendsMessage(req.params.senderId, req.params.receiverId, req.body)
            .then(message => res.json(message));
    }

    /**
     * Records a particular user deleting a message sent to another user.
     * @param {Request} req Represents the request from the client, including the path parameters messageId representing
     * the message being deleted.
     * @param {Response} res Represents the response to the client, including status on whether the deletion of the message
     * was successful or not.
     */
    userDeletesMessage(req: Request, res: Response) {
        MessageController.messageDao.userDeletesMessage(req.params.messageId)
            .then(status => res.send(status));
    }
}