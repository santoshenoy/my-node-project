import express, {Request, Response} from 'express';
import UserController from "./controllers/UserController";
import TuitController from "./controllers/TuitController";
import mongoose from 'mongoose';
import BookmarkController from "./controllers/BookmarkController";
import FollowController from "./controllers/FollowController";
const app = express();
app.use(express.json());
app.get('/hello', (req, res) =>
    res.send('Hello World!'));

app.get('/add/:a/:b', (req, res) => {
    res.send(req.params.a + req.params.b);
})

mongoose.connect("mongodb+srv://santoshshenoy:santosh%40123@cluster0.sjues.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
const userController = UserController.getInstance(app);
const tuitController = TuitController.getInstance(app);
const bookmarkController = BookmarkController.getInstance(app);
const followController = FollowController.getInstance(app);

const PORT = 4000;
app.listen(process.env.PORT || PORT);