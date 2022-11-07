

const jwt = require('jsonwebtoken')

const db = require('./db')










// user register


const registerUser = (name , email , password) => {

    return db.User.findOne({
      email
    }).then(result=>{
      // console.log(result);
      if(result){
        return {
          statusCode:404,
          status:false,
          message:'user alredy exist!!! please log in'
        }
      }
      else{
        const newUser = new db.User({
          name,
          email,
          password,

          recipies:[]
        
        })
    
        newUser.save()
      return {
        statusCode:200,
        status:true,
        message:'Registered Successfully'
      }  } 
    }) }


    const login = (email,password)=>{

        return db.User.findOne({
          email,
          password
        }).then(result => {
    
          if(result){
    
            currentUser = result.name
          


            const token =  jwt.sign({
              currentemail:email
            },'suppersecretkey12345')
           return {
            statusCode:200,
            status:true,
            message:'login successfully',
            selector:true,
          
            
            email,
            token
           }
          }
          else{
            return {
              statusCode:404,
              status:false,
              message:'email or password wrong',
              selector:false
            }
   }
   }
        )}










    //    registering repie


   

        const register = (name , phone , email ,recipie , time , image , type , country , preparation) => {

          return db.User.findOne({
            email
          }).then(result=>{
            // if(result){
            //   const newRecipie = new db.Recipie({
            //     name,
            //     phone,
            //     address,
            //     email ,
            //     type ,
            //     country ,
            //     preparation
            //   })
            //   newRecipie.save()
            // }
            if(result){
              result.recipies.push({
                name:name,
                phone:phone,
                email:email,
                recipie:recipie,
                time:time,
                image:image,
                type:type,
                country:country,
                preparation:preparation

              })
              result.save(
              )
              return {
              statusCode:200,
              status:true,
              message:`your recipie is add success fully`
              }

            }
          }
          )

     
      }



       
  // const viewRecipie = (recipie) =>{

  //   return db.User.find({recipie
  //   }).then(result => {
  //     if(result){
  //       return {
  //         // statusCode:200,
  //         // status:true,
  //         statusCode:200,
  //         status:true,
  //         message:`this is your recipie`,
  //         recipies:result.recipie,
  //         recipies:result.recipies
  //       }         
  //     }
  //   })

  // }


  const getrecipie = (acno) =>{

    return db.User.findOne({
      acno
    }).then(result => {
      if(result){
        return {
          statusCode:200,
          status:true,
          recipies:result.recipies

        }
      }
      else{
        return{
          statusCode:404,
        status:false,
        message:'user does not exist'

        }
      }
    })

  }

  
  const search = ( search) =>{

    return db.User.findOne({
      acno
    }).then(result => {
      if(result){
        return {
          statusCode:200,
          status:true,
          recipies:result.recipies

        }
      }
    })

  }

   

   

        

        module.exports={
          register,
          search,

        //  viewRecipie,
         getrecipie,
         
          registerUser,
          login
        }