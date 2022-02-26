/**
 * Defines the FollowDao interface.
 */
import Follow from "../models/Follow";

/**
 * @file Declares API for Follow related data access object methods.
 */
export default interface FollowDaoI {

    findAllUsersThatUserFollows (uid: string): Promise<Follow[]>;

    findAllFollowersOfUser (uid: string): Promise<Follow[]>;

    userFollowsUser (uid: string, followedUserId: string): Promise<any>;

    userUnfollowsUser (uid: string, unfollowedUserId: string): Promise<any>;
}