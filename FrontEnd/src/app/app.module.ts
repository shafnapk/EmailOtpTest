import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { OtpformComponent } from './otpform/otpform.component';
import { WelcomeformComponent } from './welcomeform/welcomeform.component';

import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { MailformComponent } from './mailform/mailform.component';



@NgModule({
  declarations: [
    AppComponent,
    OtpformComponent,
    WelcomeformComponent,
    MailformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
