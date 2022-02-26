/**
 * @file Implements DAO managing data storage of follows. Uses mongoose FollowModel
 * to integrate with MongoDB.
 */
import Follow from "../models/Follow";
import FollowDaoI from "../interfaces/FollowDaoI";
import FollowModel from "../mongoose/FollowModel";

/**
 * @class FollowDao Implements Data Access Object managing data storage
 * of Follows.
 * @property {FollowDao} followDao Private single instance of FollowDao.
 */
export default class FollowDao implements FollowDaoI {
    private static followDao: FollowDao | null = null;

    /**
     * Create a singleton Follow DAO instance.
     * @return FollowDao
     */
    public static getInstance = (): FollowDao => {
        if (FollowDao.followDao == null) {
            FollowDao.followDao = new FollowDao();
        }
        return FollowDao.followDao;
    }
    private constructor(){}

    /**
     * Calls on FollowModel to retrieve all users a particular user is following.
     * @param {string} uid user's primary key.
     */
    findAllUsersThatUserFollows = (uid: string): Promise<Follow[]> =>
        FollowModel.find({followedBy: uid}).exec();

    /**
     * Calls on FollowModel to retrieve all users that follow a particular user.
     * @param {string} uid user's primary key.
     */
    findAllFollowersOfUser = (uid: string): Promise<Follow[]> =>
        FollowModel.find({user: uid}).exec();

    /**
     * Calls on FollowModel to record a particular user following another user.
     * @param {string} uid primary key of the "following" user.
     * @param {string} followedUserId primary key of the "followed" user.
     */
    userFollowsUser = (uid: string, followedUserId: string): Promise<any> =>
        FollowModel.create({user: followedUserId, followedBy: uid});

    /**
     * Calls on FollowModel to record a particular user unfollowing another user.
     * @param {string} uid primary key of the "unfollowing" user.
     * @param {string} unfollowedUserId primary key of the "unfollowed" user.
     */
    userUnfollowsUser = async(uid: string, unfollowedUserId: string): Promise<any> =>
        FollowModel.deleteOne({user: unfollowedUserId, followedBy: uid});
}