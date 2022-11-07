import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  constructor(private dataService:DataService ,  private router:Router) { }

  ngOnInit(): void {
  }



  // user registration


  registerUser(a:any , b:any , c:any){




   
    var name = a.value
    var email = b.value
    var password = c.value


    console.log(name , email , password);

    alert(name + email + password)

    this.dataService.registerUser(name , email , password)
    .subscribe(
      (result:any) => {
        alert(result.message) 
        alert(result.status)

         this.router.navigateByUrl('')


       
      },
      //status : 400
      result => {
        alert (result.error.message)
      }
    )
  
    

  }

  

  dash(){
    this.router.navigateByUrl('')
  }





}
