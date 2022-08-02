import { Component, OnInit } from '@angular/core';
import { ProductContract } from '../../contracts/ProductContract';

@Component({
  selector: 'app-wayBinding',
  templateUrl: './wayBinding.component.html',
  styleUrls: ['./wayBinding.component.css']
})
export class WayBindingComponent implements OnInit {

   public Product:ProductContract = {
     Name : "",
     Price: 0,
     Stock: false,
     City: "Select a City"
   }
 
  constructor() { }

  ngOnInit(): void {
   
  }

}
