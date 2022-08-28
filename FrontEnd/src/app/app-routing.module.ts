import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MailformComponent } from './mailform/mailform.component';
import { OtpformComponent } from './otpform/otpform.component';
import { WelcomeformComponent } from './welcomeform/welcomeform.component';

const routes: Routes = [
  {path:'', component:MailformComponent},
  {path:'otpform',component:OtpformComponent},
  {path:'welcome',component:WelcomeformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
