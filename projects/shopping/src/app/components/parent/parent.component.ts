import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  public MessageToChild:string = 'Waiting for message';
  public MessageFromChild:string = '';
  public ObjectToChild:any = {};
  constructor() { }

  ngOnInit(): void {
  }
  public SendClick(){
    this.MessageToChild = 'Hello ! from Parent';
    this.ObjectToChild = {
      Name: 'Samsung TV',
      Price: 45000.44
    }
  }
  public GetMessageFromChild(e:string) {
     this.MessageFromChild = e;
  }
}

