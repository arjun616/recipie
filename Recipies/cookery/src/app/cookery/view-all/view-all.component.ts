import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {

  constructor( private dataService :DataService ) { }

  recipies: any
  acno : any
  ngOnInit(  ): void { 


    this.acno = 100
    this.dataService.getrecipie(this.acno)
    .subscribe((result:any)=>{
      this.recipies=result.recipies
    },
    result=>{
      alert(result.error.message)
    })
   



  }

  






 


  }




  


