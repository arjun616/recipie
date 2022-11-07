const express = require('express')

const app = express()

const dataService = require('./services/dataService')


const cors = require('cors')
const { User } = require('./services/db')


const jwt = require('jsonwebtoken')





app.use(cors({
    orgin:'http://localhost:4200'
}))



app.use(express.json())






app.post('/registerUser',(req,res)=>{
    console.log(req.body);
   

    dataService.registerUser(req.body.name,req.body.email,req.body.password,)
    .then(result=> {
        console.log(result);
       

            res.status(result.statusCode).json(result)
    })
})

app.post('/login',(req,res)=>{
    console.log(req.body);
    //asyncronous
    dataService.login(req.body.email,req.body.password)
    .then(result => {
        console.log(result);
        res.status(result.statusCode).json(result)
    })

})


app.post('/register',(req,res)=>{
    console.log(req.body);
   
    dataService.register(req.body.name,req.body.phone,req.body.email,req.body.recipie,req.body.time,req.body.image,req.body.type,req.body.country,req.body.preparation)
    .then(result=> {
        console.log(result);
        res.status(result.statusCode).json(result)
      
   
    })
})



app.post('/allrecipie',(req,res)=>{
    console.log(req.body);
    dataService.getrecipie(req.body.acno)
    .then(result => {
        console.log();
        res.status(result.statusCode).json(result)
    })
   
})


app.post('/search',(req,res)=>{
    console.log(req.body);
    dataService.search(req.body.search)
    .then(result => {
        console.log();
        res.status(result.statusCode).json(result)
    })
   
})





app.listen(3000,()=> {
    console.log('server started at port 3000');
    })
    
    
    