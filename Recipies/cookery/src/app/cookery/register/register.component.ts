import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  


  // validator for the registration form

 



  constructor(private formBuilder:FormBuilder,private dataService:DataService,private router:Router) { }

  ngOnInit(): void {
  }


  // registration starts now

  register(a:any , b:any ,  c:any , d:any , e:any , f:any , g:any ,  h:any , i:any){




   
    var name = a.value
    var phone = b.value
    var email =c.value
    var recipie =d.value
    var time  =e.value
    var image =f.value
    var type = g.value
    var country = h.value

    var preparation = i.value
    

    console.log(name , phone , email , type , country , preparation);
    
    
   this.dataService.register(name , phone ,  email ,  recipie, time , image, type , country , preparation)
   .subscribe(
    (result:any) => {
      alert(result.message)
      this.router.navigateByUrl('')
    },
    //status : 400
    result => {
      alert (result.error.message)
    }
  )






  }



}
