import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { HomeComponent } from './home/home.component';
import { ListMenuItemComponent } from './home/list-menu-item/list-menu-item.component';
import { MenuFormComponent } from './home/menu-form/menu-form.component';
import { OrderlistComponent } from './home/orderlist/orderlist.component';
import { OrderFormComponent } from './home/order-form/order-form.component';


const routes: Routes = [
{ path: 'front', component: FrontpageComponent },
{path:"login",component: LoginuserComponent},
{path:"home", component: HomeComponent,
children:[{ path: 'addmenu', component: MenuFormComponent },
{path:"menulist", component: ListMenuItemComponent},
{path:'orderlist', component: OrderlistComponent},
{path:'addorder', component: OrderFormComponent}

],

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
