import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertionPageComponent } from './Components/insertion-page/insertion-page.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import {BrandComponent} from "./Components/brand/brand.component";
import {SearchComponent} from "./Components/search/search.component";
import {CategoryComponent} from "./Components/category/category.component";
import {CatalogComponent} from "./Components/catalog/catalog.component";
import {ProfileComponent} from "./Components/profile/profile.component";

const routes: Routes = [
  {path : '', component: HomePageComponent},
  {path : 'insertion/:id', component:InsertionPageComponent},
  {path : 'brand/:brandName', component: BrandComponent },
  {path : 'search/:searchstring', component: SearchComponent },
  {path : 'category/:categoryName', component: CategoryComponent },
  {path : 'catalog', component:CatalogComponent},
  {path:  'profile/:userid', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
