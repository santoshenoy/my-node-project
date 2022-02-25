/**
 * @file Implements mongoose schema to CRUD documents in the User collection.
 */
import mongoose from "mongoose";
import User from "../models/User";

/**
 * @typedef User Represents User model.
 * @property {ObjectId} username username of User.
 * @property {ObjectId} password password of User.
 * @property {ObjectId} firstName First Name of User.
 * @property {ObjectId} lastName Last Name of User.
 * @property {ObjectId} email Email of User.
 * @property {ObjectId} profilePhoto Profile Photo of User.
 * @property {ObjectId} headerImage Header Image of User.
 * @property {ObjectId} dateOfBirth Date of birth of User.
 * @property {ObjectId} accountType Type of account of User.
 * @property {ObjectId} maritalStatus Marital status of User.
 * @property {ObjectId} location Location of User.
 * @property {ObjectId} salary Salary of User.
 */
const UserSchema = new mongoose.Schema<User>({
    username: {type: String, required: true, default: `testusername${Date.now()}`},
    password: {type: String, required: true, default: `testpassword${Date.now()}`},
    firstName: String,
    lastName: String,
    email: {type: String, required: true, default: `testemail${Date.now()}`},
    profilePhoto: String,
    headerImage: String,
    biography: String,
    dateOfBirth: Date,
    accountType: {type: String, enum: ["PERSONAL", "ACADEMIC", "PROFESSIONAL"]},
    maritalStatus: {type: String, enum: ["MARRIED", "SINGLE", "WIDOWED"]},
    location: {
        latitude: Number,
        longitude: Number
    },
    salary: {type: Number, default: 50000}
}, {collection: "users"});

export default UserSchema;