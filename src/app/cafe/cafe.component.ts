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
  cafeOrigen: number = 0;
  cafeBlend: number = 0;

  getCafesList(){
    this.cafeService.getCafes().subscribe(cafes=>{
      this.cafes = cafes
      this.calculateCounts()
    })
  }

  calculateCounts():void{
    this.cafeOrigen = 0;
    this.cafeBlend = 0;
    
    this.getCafesList();
    this.cafes.forEach(cafe =>{
      if(cafe.tipo == "Café de Origen"){
        this.cafeOrigen++
      }else if (cafe.tipo == "Blend"){
        this.cafeBlend++
      }
    })
  }

  ngOnInit(){
    this.getCafesList();
  }

}
