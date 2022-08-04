import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventdemo',
  templateUrl: './eventdemo.component.html',
  styleUrls: ['./eventdemo.component.css']
})
export class EventdemoComponent implements OnInit {

  public Users:any[] = [
    {UserId:'john'},
    {UserId:'john12'},
    {UserId:'john123'},
    {UserId:'david'}
 ];
 public UserMessage:string = '';
 public IsUserValid:boolean = false;
 public IsUserInvalid:boolean = false;
 public ShowCapsWarn:boolean = false;
 public ShowCityError:boolean = false;
 public Banner:string = 'assets/slide1.jpg';
 public Msg:string = '';


  constructor() { }

  ngOnInit(): void {
  }
  public VerifyUserId(e:any){
    for(var user of this.Users) {
       if(user.UserId==e.target.value) {
          this.UserMessage = 'User Id Taken - Try Another';
          this.IsUserValid = false;
          this.IsUserInvalid = true;
          break;
       } else {
          this.UserMessage = 'User Id Available';
          this.IsUserValid = true;
          this.IsUserInvalid = false;
       }
    }
  }
  public HideUserMessage(){
    this.UserMessage= '';
  }
  public VerifyCaps(e:any) {
    if(e.keyCode>=65 && e.keyCode<=90) {
       this.ShowCapsWarn = true;
    } else {
      this.ShowCapsWarn = false;
    }
  }
  public VerifyCity(e:any) {
    if(e.target.value=='-1') {
      this.ShowCityError = true;
    } else {
      this.ShowCityError = false;
    }
  }
  public Banner2(){
    this.Banner = 'assets/slide2.jfif';
  }
  public Banner1(){
    this.Banner = 'assets/slide1.jpg';
  }
  public ProductDetails(e:any){
     switch(e.target.name){
        case 'shoe':
        this.Msg = '50% OFF on Footwear';
        break;
        case 'jacket':
          this.Msg = '70% OFF on Winter Wear';
          break;
     }
  }
} 
  

    
  


