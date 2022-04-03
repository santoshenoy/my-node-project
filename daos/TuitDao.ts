/**
 * @file Implements DAO managing data storage of tuits. Uses mongoose TuitModel
 * to integrate with MongoDB.
 */
import TuitModel from "../mongoose/TuitModel";
import Tuit from "../models/Tuit";
import TuitDaoI from "../interfaces/TuitDaoI";

/**
 * @class TuitDao Implements Data Access Object managing data storage
 * of Tuits.
 * @property {TuitDao} tuitDao Private single instance of TuitDao.
 */
export default class TuitDao implements TuitDaoI {
    private static tuitDao: TuitDao | null = null;

    /**
     * Create a singleton Tuit DAO instance.
     * @return TuitDao
     */
    public static getInstance = (): TuitDao => {
        if(TuitDao.tuitDao === null) {
            TuitDao.tuitDao = new TuitDao();
        }
        return TuitDao.tuitDao;
    }

    private constructor() {}

    /**
     * Uses TuitModel to retrieve all tuit documents from tuits collection.
     * @returns Promise To be notified when the tuits are retrieved from
     * database.
     */
    findAllTuits = async (): Promise<Tuit[]> =>
        TuitModel.find();

    findAllTuitsByUser = async (uid: string): Promise<Tuit[]> =>
        TuitModel.find({postedBy: uid});

    /**
     * Uses TuitModel to retrieve single tuit document from tuits collection.
     * @param {string} tid Tuit's primary key.
     * @returns Promise To be notified when the tuit is retrieved from the database.
     */
    findTuitById = async (tid: string): Promise<any> =>
        TuitModel.findById(tid)
            .populate("postedBy")
            .exec();

    /**
     * Inserts tuit by a particular user into database.
     * @param {Tuit} tuit tuit to be inserted into the database.
     * @param {string} uid User's primary key.
     * @returns Promise To be notified when the tuit is inserted into the database.
     */
    createTuitByUser = async (uid: string, tuit: Tuit): Promise<Tuit> =>
        TuitModel.create({...tuit, postedBy: uid});

    /**
     * Updates tuit with new values in database.
     * @param {string} tid Primary key of tuit to be modified.
     * @param {Tuit} tuit Tuit object containing properties and their new values.
     * @returns Promise To be notified when the tuit is updated in the database.
     */
    updateTuit = async (tid: string, tuit: Tuit): Promise<any> =>
        TuitModel.updateOne(
            {_id: tid},
            {$set: tuit});

    /**
     * Removes tuit from the database.
     * @param {string} uid Primary key of the tuit to be removed.
     * @returns Promise To be notified when the tuit is removed from the database.
     */
    deleteTuit = async (tid: string): Promise<any> =>
        TuitModel.deleteOne({_id: tid});

    deleteTuitByContent = async (tuitContent: string): Promise<any> =>
        TuitModel.deleteMany({tuit: tuitContent});

    updateLikes = async (tid: string, newStats: any): Promise<any> =>
        TuitModel.updateOne({_id: tid}, {$set: {stats: newStats}});
}