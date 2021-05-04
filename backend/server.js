import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js'

dotenv.config(); // getting data from .env file

const app = express(); // defining express app

app.use(cors()) // Use this after the variable declaration

app.use(express.json({ extended: false })); 
app.use(express.urlencoded({ extended: true })); //handling data received in the request

// Defining mongoDB database location
mongoose.connect('mongodb+srv://admin:admin123@cluster0.gwgp8.mongodb.net/BackendDataService?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
    .then(() => console.log("MongoDB Connected"))  // if mongoDB is connected
    .catch(error => console.log("MongoDB Error : ", error)); // if any mongoDB error, send error in console

app.use('/users', userRouter);  //handle all user related requests and redirect to user router

app.get('/', (req, res) => {  // if everything is OK the server will run and you will get "Server is Ready " in response
    res.send('Server is ready');
});

app.use((err, req, res, next)=> {  //if any error in the app, sending the particular error in the response
    res.status(500).send({message:err.message});
});

//This part is for local hosting, if locally host the app will run on port 5000
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`); 
});