import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { SidnavComponent } from './components/sidnav/sidnav.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SignupComponent } from './components/signup/signup.component';

import { 
  NgxUiLoaderModule,
  NgxUiLoaderConfig, 
  SPINNER,
  PB_DIRECTION
 } from 'ngx-ui-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const ngxUiLoaderConfig : NgxUiLoaderConfig = {
   text: "Loading...",
   textColor: "orange",
   textPosition: "center-center",
   pbColor: "orange",
   bgsColor: "orange",
  fgsColor:"orange",
  fgsType: SPINNER.squareJellyBox,
  fgsSize: 100,
  pbDirection: PB_DIRECTION.leftToRight,
  pbThickness: 5
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidnavComponent,
    HomeComponent,
    PageNotFoundComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
