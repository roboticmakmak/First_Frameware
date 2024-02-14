import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portifolio',
  templateUrl: './portifolio.component.html',
  styleUrls: ['./portifolio.component.css']
})
export class PortifolioComponent implements OnInit {

  constructor() {
   }

  ngOnInit() { 
  }







  centeredImage: string | null = null;

  showImageInCenter(image: any) {
    console.log(image);
      this.centeredImage = image;
  }


  images: string[] = [
    './assets/port1.png',
    './assets/port2.png',
    './assets/port3.png',
  ];


}
