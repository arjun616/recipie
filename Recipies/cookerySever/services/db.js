// import mongoose

const mongoose = require('mongoose')


//conect to database

mongoose.connect('mongodb://localhost:27017/cookery',() => {
    console.log('mongodb connected');
})



const User = mongoose.model('User',{
    email:String,
    name:String,
    password:String,
    recipies: []
})


// const Recipies = mongoose.model('Recipies',{
//     name:String,
//     phone:Number,
//     address:String,
//     email:String ,
//     type:String ,
//     country:String ,
//     preparation:String
// })



//export

module.exports = {
    User,
    // Recipies
}

