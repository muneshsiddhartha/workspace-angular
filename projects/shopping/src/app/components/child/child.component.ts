import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() public MessageFromParent:string = '';
  @Input() public ProductDetails:any = {};
  @Output() public ChildClick:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  public OnButtonClick(){
     this.ChildClick.emit('Hello ! from Child');
  }

}