import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NetflixindexComponent } from './NetflixWebsite/netflixindex/netflixindex.component';
import { NetflixheaderComponent } from './NetflixWebsite/netflixheader/netflixheader.component';
import { NetflixmainComponent } from './NetflixWebsite/netflixmain/netflixmain.component';
import { NetflixregisterComponent } from './NetflixWebsite/netflixregister/netflixregister.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { WayBindingComponent } from './components/wayBinding/wayBinding.component';
import { IfdemoComponent } from './components/ifdemo/ifdemo.component';
import { FordemoComponent } from './components/fordemo/fordemo.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
import { ForpropertiesComponent } from './components/forproperties/forproperties.component';
import { EventdemoComponent } from './components/eventdemo/eventdemo.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NetflixindexComponent,
    NetflixheaderComponent,
    NetflixmainComponent,
    NetflixregisterComponent,
    DatabindingComponent,
    WayBindingComponent,
    IfdemoComponent,
    FordemoComponent,
    ShoppingcartComponent,
    ForpropertiesComponent,
    EventdemoComponent,
    
    
    
  
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [EventdemoComponent]
})
export class AppModule { 

}
