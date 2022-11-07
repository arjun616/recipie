import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookeryComponent } from '../cookery.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dataService :DataService , private router : Router ) { }

  ngOnInit(): void {
  }

 




  login(a:any , b:any , c:any){




   
    var name = a.value
    var email = b.value
    var password = c.value


    console.log(name , email , password);

    alert( name + email + password)

    const result= this.dataService.login(email,password)
    .subscribe(
      //status:200
      (result:any) => {
        localStorage.setItem('token',JSON.stringify(result.token))
        localStorage.setItem('selector',result.selector)
        localStorage.setItem('email',JSON.stringify(result.email))

        alert(result.message)
        alert(result.selector)
      

        this.router.navigateByUrl('')
        },
        //status 400
        result=>{
          alert(result.error.message)
        }
    )
      }


      dash(){
        this.router.navigateByUrl('')
      }

}




