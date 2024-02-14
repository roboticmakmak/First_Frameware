import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }



  isNavbarLarge: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;


    if (scrollPosition === 0) {
      this.isNavbarLarge = true; 
    } else {
      this.isNavbarLarge = false;
    }


  }




}
