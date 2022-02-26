/**
 * @file Defines the FollowController interface.
 */
import {Request, Response} from "express";

export default interface FollowControllerI {

    findAllUsersThatUserFollows(req: Request, res: Response): void;

    findAllFollowersOfUser(req: Request, res: Response): void;

    userFollowsUser(req: Request, res: Response): void;

    userUnfollowsUser(req: Request, res: Response): void;
}