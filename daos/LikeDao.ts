import LikeDaoI from "../interfaces/LikeDaoI";
import LikeModel from "../mongoose/LikeModel";
import Like from "../models/Like";

/**
 * @class LikeDao Implements Data Access Object managing data storage
 * of Likes.
 * @property {LikeDao} likeDao Private single instance of LikeDao.
 */
export default class LikeDao implements LikeDaoI {
    private static likeDao: LikeDao | null = null;

    /**
     * Create a singleton Like DAO instance.
     * @return LikeDao
     */
    public static getInstance = (): LikeDao => {
        if(LikeDao.likeDao === null) {
            LikeDao.likeDao = new LikeDao();
        }
        return LikeDao.likeDao;
    }
    private constructor() {}

    /**
     * Uses LikeModel to retrieve all users that have liked a particular tuit.
     * @param {string} tid tuit's primary key.
     */
    findAllUsersThatLikedTuit = async (tid: string): Promise<Like[]> =>
        LikeModel
            .find({tuit: tid})
            .populate("likedBy")
            .exec();

    /**
     * Uses LikeModel to retrieve all tuits liked by a particular user.
     * @param {string} uid user's primary key
     */
    findAllTuitsLikedByUser = async (uid: string): Promise<Like[]> =>
        LikeModel
            .find({likedBy: uid})
            .populate("tuit")
            .exec();

    /**
     * Uses LikeModel to record a particular user liking a particular tuit.
     * @param {string} uid user's primary key
     * @param {string} tid tuit's primary key
     */
    userLikesTuit = async (uid: string, tid: string): Promise<any> =>
        LikeModel.create({tuit: tid, likedBy: uid});

    /**
     * Uses LikeModel to record a particular user unliking a particular tuit.
     * @param {string} uid user's primary key
     * @param {string} tid tuit's primary key
     */
    userUnlikesTuit = async (uid: string, tid: string): Promise<any> =>
        LikeModel.deleteOne({tuit: tid, likedBy: uid});
}