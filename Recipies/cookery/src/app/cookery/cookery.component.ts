import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data.service';
import { LoginComponent } from './login/login.component';
import { UserRegisterComponent } from './user-register/user-register.component';


@Component({
  selector: 'app-cookery',
  templateUrl: './cookery.component.html',
  styleUrls: ['./cookery.component.css']
})
export class CookeryComponent implements OnInit { 

  selector:any

  beforeselector : any

  afterselector:any
  

  constructor(private dataService:DataService ,   private router:Router  )  {

    
   }
  

  ngOnInit( ): void {


   


    if(localStorage.getItem("selector"))
    {
        this.beforeselector=false
    }
    else{
      this.beforeselector=true
    }

    if(localStorage.getItem("selector"))
    {
      this.afterselector=true
      
    }
    else{
      this.afterselector=false

    }
   
    
  }

  passed:any

  

  

 

registerUser(){
  this.router.navigateByUrl('registerUser')
}


login(){
this.router.navigateByUrl('login')
  
  
  

}

recipieAdd(){

  this.router.navigateByUrl('register')

}

logout(){
  localStorage.removeItem("selector")
}




}
