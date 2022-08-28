import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-otpform',
  templateUrl: './otpform.component.html',
  styleUrls: ['./otpform.component.css']
})
export class OtpformComponent implements OnInit {

  constructor(private http : HttpClient, private router: Router,private location: Location) { }

  otpsubmit : string | undefined;

  ngOnInit(): void {
  }

  onSubmit(form : NgForm){
    const state :any = this.location.getState();
  
    console.log(state.usermail);
    
    this.http.get("http://localhost:5000/getuserotp?usermail="+state.usermail).subscribe((data: any )=> {
        console.log(data);
       // this.router.navigate(['otpform']);  

       if(data.otp == this.otpsubmit){
        this.router.navigateByUrl('welcome');
       }
       else{
        alert('wrong otp');
       }
       
    })

  }



}
