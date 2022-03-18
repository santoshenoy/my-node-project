/**
 * @file Implements HTTP server using Express. Defines RESTful Web services
 * for CRUD operations on the following resources:
 * <ul>
 *     <li>users</li>
 *     <li>tuits</li>
 *     <li>likes</li>
 *     <li>follows</li>
 *     <li>messages</li>
 *     <li>bookmarks</li>
 * </ul>
 *
 * Connects to a MongoDB instance hosted on the Atlas cloud database.
 *
 */
import express, {Request, Response} from 'express';
import UserController from "./controllers/UserController";
import TuitController from "./controllers/TuitController";
import LikeController from "./controllers/LikeController";
import mongoose from 'mongoose';
import BookmarkController from "./controllers/BookmarkController";
import FollowController from "./controllers/FollowController";
import MessageController from "./controllers/MessageController";
const app = express();
var cors = require('cors');
app.use(cors());
app.use(express.json());
app.get('/hello', (req, res) =>
    res.send('Hello World!'));

app.get('/add/:a/:b', (req, res) => {
    res.send(req.params.a + req.params.b);
})

//mongoose.connect("mongodb+srv://santoshshenoy:santosh%40123@cluster0.sjues.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
mongoose.connect("mongodb+srv://fse_assignment_3:fse_assignment_3@cluster0.l9bio.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
const userController = UserController.getInstance(app);
const tuitController = TuitController.getInstance(app);
const bookmarkController = BookmarkController.getInstance(app);
const followController = FollowController.getInstance(app);
const messageController = MessageController.getInstance(app);
const likeController = LikeController.getInstance(app);

const PORT = 4000;
app.listen(process.env.PORT || PORT);