/**
 * @file Implements DAO managing data storage of bookmarks. Uses mongoose BookmarkModel
 * to integrate with MongoDB.
 */
import Bookmark from "../models/Bookmark";
import BookmarkDaoI from "../interfaces/BookmarkDaoI";
import BookmarkModel from "../mongoose/BookmarkModel";

/**
 * @class BookmarkDao Implements Data Access Object managing data storage
 * of Bookmarks.
 * @property {BookmarkDao} bookmarkDao Private single instance of BookmarkDao.
 */
export default class BookmarkDao implements BookmarkDaoI {
    private static bookmarkDao: BookmarkDao | null = null;

    /**
     * Create a singleton Bookmark DAO instance.
     * @return BookmarkDao
     */
    public static getInstance = (): BookmarkDao => {
        if (BookmarkDao.bookmarkDao === null) {
            BookmarkDao.bookmarkDao = new BookmarkDao();
        }
        return BookmarkDao.bookmarkDao;
    }
    private constructor() {}

    /**
     * Uses BookmarkModel to retrieve all users that have bookmarked a particular tuit.
     * @param {string} tid tuit's primary key.
     */
    findAllUsersThatBookmarkedTuit = (tid: string): Promise<Bookmark[]> =>
        BookmarkModel.find({tuit: tid}).populate("bookmarkedBy").exec();

    /**
     * Uses BookmarkModel to retrieve all tuits bookmarked by a particular user.
     * @param {string} uid user's primary key
     */
    findAllTuitsBookmarkedByUser = (uid: string): Promise<Bookmark[]> =>
        BookmarkModel.find({bookmarkedBy: uid}).populate("tuit").exec();

    /**
     * Uses BookmarkModel to record a particular user bookmarking a particular tuit.
     * @param {string} uid user's primary key
     * @param {string} tid tuit's primary key
     */
    userBookmarksTuit = (uid: string, tid: string): Promise<any> =>
        BookmarkModel.create({tuit: tid, bookmarkedBy: uid});

    /**
     * Uses BookmarkModel to record a particular user unbookmarking a particular tuit.
     * @param {string} uid user's primary key
     * @param {string} tid tuit's primary key
     */
    userUnbookmarksTuit = async(uid: string, tid: string): Promise<any> =>
        BookmarkModel.deleteOne({tuit: tid, bookmarkedBy: uid});
}