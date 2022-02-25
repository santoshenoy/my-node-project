/**
 * @file Defines the BookmarkDao interface.
 */
import Bookmark from "../models/Bookmark";

export default interface BookmarkDaoI {

    findAllUsersThatBookmarkedTuit (tid: string): Promise<Bookmark[]>;

    findAllTuitsBookmarkedByUser (uid: string): Promise<Bookmark[]>;

    userBookmarksTuit (uid: string, tid: string): Promise<any>;

    userUnbookmarksTuit (uid: string, tid: string): Promise<any>;
}