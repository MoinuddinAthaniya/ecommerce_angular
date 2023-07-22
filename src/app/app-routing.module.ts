import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutpageComponent } from './component/aboutpage/aboutpage.component';
import { HomepageComponent } from './component/homepage/homepage.component';

const routes: Routes = [
  {path:'aboutUs',component:AboutpageComponent,},
  {path:'home',component:HomepageComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
