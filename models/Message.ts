import User from "./User";

export default interface Message {
    toUser: User,
    fromUser: User,
    message: String,
    sentOn?: Date
}