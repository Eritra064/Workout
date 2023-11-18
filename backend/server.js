require('dotenv').config()

const express = require('express');
//const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');

const workoutRoutes = require('./routes/workouts');
const userRoutes = require('./routes/user')

//express app
const app = express();

//middleware
app.use(express.json())

app.use((req,res,next) =>{
    console.log(req.path,req.method)
    next()
})

//routes
app.use('/api/workouts',workoutRoutes)
app.use('/api/user',userRoutes)

//connect to db
mongoose.connect('mongodb://127.0.0.1:27017')
    .then(() =>{
        app.listen(process.env.PORT, () =>{
            console.log("connected to db and listening on port 4000!");
        })
    })
    .catch((error)=>{
        console.log(error);
    })



    