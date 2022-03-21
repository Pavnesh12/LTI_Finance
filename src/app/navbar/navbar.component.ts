import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }



 ngOnInit(): void {

 }

 isScrolled = false;

 @HostListener("window:scroll")

 scrollEvent() {

  window.pageYOffset >= 80 ? (this.isScrolled = true) : (this.isScrolled = false);

 }

}

