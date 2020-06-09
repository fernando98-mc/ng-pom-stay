import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  //{path:'footer', component:FooterComponent},

  /**  404 go to the end of the routes */
  {path:'**', component:NotfoundpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
