/**
 * @file Declares the User data type model.
 */
import AccountType from "./AccountType";
import MaritalStatus from "./MaritalStatus";
import Location from "./Location";
import mongoose from "mongoose";

/**
 * @typedef User Represents User model.
 * @property {String} username username of User.
 * @property {String} password password of User.
 * @property {String} firstName First Name of User.
 * @property {String} lastName Last Name of User.
 * @property {String} email Email of User.
 * @property {String} profilePhoto Profile Photo of User.
 * @property {String} headerImage Header Image of User.
 * @property {Date} dateOfBirth Date of birth of User.
 * @property {AccountType} accountType Type of account of User.
 * @property {MaritalStatus} maritalStatus Marital status of User.
 * @property {Location} location Location of User.
 * @property {Number} salary Salary of User.
 */
export default interface User {
    _id?: mongoose.Schema.Types.ObjectId,
    username: string,
    password: string,
    firstName?: string,
    lastName?: string,
    email: string,
    profilePhoto?: string,
    headerImage?: string,
    biography?: string,
    dateOfBirth?: Date,
    accountType?: AccountType,
    maritalStatus?: MaritalStatus,
    location?: Location,
    salary?: number
};