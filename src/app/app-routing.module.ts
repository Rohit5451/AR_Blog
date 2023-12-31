import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { TermsAndConditionComponent } from './pages/terms-and-condition/terms-and-condition.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'category/:category/:id',component:SingleCategoryComponent},
  {path:'post',component:SinglePostComponent},
  {path:'about',component:AboutusComponent},
  {path:'term-conditions',component:TermsAndConditionComponent},
  {path:'contact',component:ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
