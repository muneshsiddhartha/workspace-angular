import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ifdemo',
  templateUrl: './ifdemo.component.html',
  styleUrls: ['./ifdemo.component.css']
})
export class IfdemoComponent implements OnInit {

  public ViewName:string = "basic";

  constructor() { }

  ngOnInit(): void {
  }
  public ChangeView(event:any){
     this.ViewName = event.target.name;
  }
  public SelectView(val:string) {
    this.ViewName = val;
  }

}
