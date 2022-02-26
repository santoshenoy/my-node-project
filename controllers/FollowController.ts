/**
 * @file Controller RESTful Web service API for Follows resource.
 */
import {Request, Response, Express} from "express";
import FollowDao from "../daos/FollowDao";
import FollowControllerI from "../interfaces/FollowControllerI";

/**
 * @class FollowController Implements RESTful web service API for follows resource.
 * Defines the following HTTP endpoints:
 * <ul>
 *     <li>GET /api/users/:uid/following to retrieve all users that a particular user is following</li>
 *     <li>GET /api/users/:uid/followers to retrieve all users that follow a particular user</li>
 *     <li>POST /api/users/:uid/follows/:followedUserId to record that a user follows another user</li>
 *     <li>DELETE /api/users/:uid/unfollows/:unfollowedUserId to record that a user no longer follows another user</li>
 * </ul>
 * @property {FollowDao} followDao Singleton DAO implementing follows CRUD operations.
 * @property {FollowController} followController Singleton controller implementing RESTful web service API.
 */
export default class FollowController implements FollowControllerI {
    private static followController: FollowController | null = null;
    private static followDao: FollowDao = FollowDao.getInstance();

    /**
     * Create a singleton follow controller instance.
     * @param {Express} app Express instance to declare the RESTful web service API.
     * @return FollowController
     */
    public static getInstance = (app: Express): FollowController => {
        if (FollowController.followController == null) {
            FollowController.followController = new FollowController();
            app.get("/api/users/:uid/following", FollowController.followController.findAllUsersThatUserFollows);
            app.get("/api/users/:uid/followers", FollowController.followController.findAllFollowersOfUser);
            app.post("/api/users/:uid/follows/:followedUserId", FollowController.followController.userFollowsUser);
            app.delete("/api/users/:uid/unfollows/:unfollowedUserId", FollowController.followController.userUnfollowsUser);
        }
        return FollowController.followController;
    }
    private constructor(){}

    /**
     * Retrieves all users that a particular user is following.
     * @param {Request} req Represents the request from the client, including the path parameter uid representing the user.
     * @param {Response} res Represents the response to the client, including the body as JSON array containing the list of users.
     */
    findAllUsersThatUserFollows = (req: Request, res: Response) =>
        FollowController.followDao.findAllUsersThatUserFollows(req.params.uid)
            .then(follows => res.json(follows));

    /**
     * Retrieves all followers of a particular user from the database.
     * @param {Request} req Represents the request from the client, including the path parameter uid representing the user.
     * @param {Response} res Represents the response to the client, including the body as a JSON containing the list of followers.
     */
    findAllFollowersOfUser = (req: Request, res: Response) =>
        FollowController.followDao.findAllFollowersOfUser(req.params.uid)
            .then(follows => res.json(follows));

    /**
     * Records a particular user following another user in the database.
     * @param {Request} req Represents the request from the client, including the path parameters uid and followedUserId
     * representing the "follower" user and that "followed" user respectively.
     * @param {Response} res Represents the response to the client, including the body as a JSON with the new follow.
     */
    userFollowsUser = (req: Request, res: Response) =>
        FollowController.followDao.userFollowsUser(req.params.uid, req.params.followedUserId)
            .then(follow => res.json(follow));

    /**
     * Records a particular user unfollowing another user in the database.
     * @param {Request} req Represents the request from the client, including the path parameters uid and unfollowedUserId
     * representing the "unfollowing" user and "unfollowed" user respectively.
     * @param {Response} res Represents the response to the client, including status on whether the unfollow was
     * successful or not.
     */
    userUnfollowsUser(req: Request, res: Response) {
        FollowController.followDao.userUnfollowsUser(req.params.uid, req.params.unfollowedUserId)
            .then(status => res.send(status));
    }
}