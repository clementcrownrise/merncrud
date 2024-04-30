import  express  from "express";
import mongoose from "mongoose";
import cors from "cors";
//import userModel from '../models/Users.js'

const app = express();

app.use(cors())

app.use(express.json());


mongoose.connect("mongodb://localhost:27017/crud")

//lets try it  her first
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
})

const UserModel = mongoose.model('users', UserSchema)

app.get('/', (req, res) => {
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})
//thisi is to get user
app.get('/getuser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
}
)


//this is to create a new user 
app.post("/createUsers",(req, res) => {
    UserModel.create(req.body)
    .then(users =>res.json(users))
    .catch(err => res.json(err))
    
})

//this is to update
app.put('/updateUser/:id', (req, res) => {
    const id = req.params.id;
    //window.alert(id);
    UserModel.findByIdAndUpdate({_id:id},{name:req.body.name,
         email:req.body.email,
         age:req.body.age})
         .then(users =>res.json(users))
         .catch(err => res.json(err))

})


//this is to delete
app.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(res =>res.json(res))
    .catch(err =>res.json(err))
})


app.listen(1000, (err, res) => {
    console.log("server is running")
})