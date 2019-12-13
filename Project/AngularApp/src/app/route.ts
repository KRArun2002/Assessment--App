import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Category1Component } from './category1/category1.component';
import { Category2Component } from './category2/category2.component';
import { TestComponent } from './test/test.component';


export const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'test', component: TestComponent},
  {path: 'category1', component: Category1Component},
  {path: 'category2', component: Category2Component},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];
