import { Component, OnInit } from '@angular/core';
import { Cafe } from './cafe';
import { CafeService } from './cafe.service';

@Component({
  selector: 'app-cafe',
  standalone: false,
  templateUrl: './cafe.component.html',
  styleUrl: './cafe.component.css'
})
export class CafeComponent {

  constructor(private cafeService: CafeService){}

  cafes: Array<Cafe> = [];

  getCafesList(){
    this.cafeService.getCafes().subscribe(cafes=>{
      this.cafes = cafes
    })
  }

  ngOnInit(){
    this.getCafesList();
  }

}
