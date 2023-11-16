import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { FormsModule } from '@angular/forms';
import { BestSellerComponent } from './best-seller/best-seller.component';
import { HomeComponent } from './home/home.component';
import { ListMenuItemComponent } from './home/list-menu-item/list-menu-item.component';
import { MenuFormComponent } from './home/menu-form/menu-form.component';
import { HttpClientModule } from '@angular/common/http';
import { DemoDirective } from './demo.directive';
import { OrderlistComponent } from './home/orderlist/orderlist.component';
import { OrderFormComponent } from './home/order-form/order-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    LoginuserComponent,
    BestSellerComponent,
    HomeComponent,
    ListMenuItemComponent,
    MenuFormComponent,
    DemoDirective,
    OrderlistComponent,
    OrderFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
