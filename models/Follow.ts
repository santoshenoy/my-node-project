import User from "../users/User";

export default interface Follow {
    user: User,
    followedBy: User
};