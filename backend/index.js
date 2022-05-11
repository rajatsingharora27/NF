const express =require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const bodyParser=require('body-parser');
const app=express();


//add dot env file
dotenv.config();


//importing the route
//USER ROUTES
const authPage=require('./routes/auth');
const updateUser=require('./routes/user');
const deleteUser=require('./routes/user');
const getUser=require('./routes/user');
const getAllUser=require('./routes/user');

//MOVIES ROUTE
const addMovie=require('./routes/movies'); 
const updateMovie=require('./routes/movies'); 
const getMovie=require('./routes/movies'); 
const getAllMovie=require('./routes/movies'); 
const deleteMovie=require('./routes/movies'); 
const getRandomMovie=require('./routes/movies'); 

//LIST
const getList=require('./routes/list');


//middle-ware
app.use(bodyParser.json());



//connecting to the database
mongoose.connect('mongodb://localhost:27017/netflix')
.then(() => console.log("mongodb connected"))
.catch((err) => {
  console.log('not connected');
  
});

app.use('/api',authPage);
app.use('/api',updateUser);
app.use('/api',deleteUser);
app.use('/api',getUser);
app.use('/api',getAllUser);

app.use('/api',addMovie);
app.use('/api',updateMovie);
app.use('/api',getMovie);
app.use('/api',deleteMovie);
app.use('/api',getRandomMovie);
app.use('/api',getAllMovie);

app.use('/api',getList);



app.listen(process.env.PORT,(req,res)=>{
    console.log("Listening to the post 8000")

})