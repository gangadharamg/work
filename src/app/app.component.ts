import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'work';
  constructor(){
    window.onscroll = function() {myFunction()};

   
    function myFunction() {
      var header = document.getElementById("myHeader");
      var sticky = header.offsetTop;
      
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
  }
}
