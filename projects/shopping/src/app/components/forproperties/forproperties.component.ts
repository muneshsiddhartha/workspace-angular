import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forproperties',
  templateUrl: './forproperties.component.html',
  styleUrls: ['./forproperties.component.css']
})
export class ForpropertiesComponent implements OnInit {

  public styleObject:any = {
    'position': '',
    'left': '',
    'top': ''
  };
 
  constructor() { }

  ngOnInit(): void {
  }
  public GetPosition(e:any){
    this.styleObject = {
      'position': 'fixed',
      'left':e.clientX + 'px',
      'top':e.clientY + 'px'
    }
  }
 
}