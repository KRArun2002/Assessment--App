import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
// import { SimpleTimer } from 'ng2-simple-timer';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuizComponent } from './quiz/quiz.component';
import { HelloComponent } from './hello.component';
import { ResultComponent } from './result/result.component';
import { appRoutes } from './route';
import { CategoryComponent } from './category/category.component';
import { Quiz1Component } from './quiz1/quiz1.component';
import { Quiz2Component } from './quiz2/quiz2.component';
import { LoginpgComponent } from './loginpg/loginpg.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    QuizComponent,
    HelloComponent,
    ResultComponent,
    CategoryComponent,
    Quiz1Component,
    Quiz2Component,
    LoginpgComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    MatSliderModule,
    MatCheckboxModule,
    MatRadioModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  // providers: [SimpleTimer],
  bootstrap: [AppComponent]
})
export class AppModule { }
