import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/cookery/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataService : DataService) { }

  search:any

  ngOnInit(): void {
  }


  searching( search:any ){

    var search = search.value

    this.dataService.searching(search)
   .subscribe(
    (result:any) => {
      alert(result.message)
    },
    //status : 400
    result => {
      alert (result.error.message)
    }
  )







  }


















  //For Live Searching Product
// document.getElementById("myinput").addEventListener("keyup",function(){
//   let myInput = document.getElementById("myinput").value;
//   var input=myInput.toLowerCase()

  

//   filterarray= galleryarray.filter(function(a){
//       if(a.name.includes(input)){
//           return a.name;
//          }

//  });
//  if(this.value==""){
//      showgallery(galleryarray);
//  }
//  else{
//      if(filterarray == ""){
//          document.getElementById("para").style.display = 'block'
//          document.getElementById("card").innerHTML = ""; 
//      }
//      else{

//          showgallery(filterarray);
//          document.getElementById("para").style.display = 'none'
//      }
//  }

// });

}
