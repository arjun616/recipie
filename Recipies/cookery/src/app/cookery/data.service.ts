import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { UserRegisterComponent } from './user-register/user-register.component';


const option ={
  headers : new HttpHeaders()
}


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient ) { }



  




  register(name:any,phone:any,email:any,  recipie:any, time:any , image:any ,type:any,country:any,preparation:any){

    const body = {
     name,
     phone,
     email,
     recipie,
     time ,
     image,
     type,
     country,
     preparation
    }

    return this.http.post('http://localhost:3000/register',body)
  
  }


  registerUser(name:any , email:any , password:any ){

    const body ={
      name,
      email,
      password
    }
    return this.http.post('http://localhost:3000/registerUser',body)

  }
  


   
  //login
  login(email:any,password:any){

    const body = {
      email,
      password
    }
    return this.http.post('http://localhost:3000/login',body)
  }


  getrecipie(acno:any)
  {

    const body = {
      acno
    }
    return this.http.post('http://localhost:3000/allrecipie',body)

  //  return this.database[acno].transaction

  }





// recipies(  ){

//   return this.http.get('http://localhost:3000/view')



// }


// searching

searching(search:any)
{

  const body = {
    search
  }
  return this.http.post('http://localhost:3000/search',body)
  

}












}
