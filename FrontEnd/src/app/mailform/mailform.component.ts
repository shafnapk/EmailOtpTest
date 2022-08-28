import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mailform',
  templateUrl: './mailform.component.html',
  styleUrls: ['./mailform.component.css']
})
export class MailformComponent implements OnInit {

  constructor(public http: HttpClient,private router : Router) { }

  ngOnInit(): void {
  }

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 
  usermail:string = "";
  
  onSubmit(form : NgForm){

    console.log(this.usermail);
    
    this.http.post("http://localhost:5000/submitusermail",{"usermail" : this.usermail}).subscribe((data: any )=> {
        console.log(data);
       this.router.navigate(['otpform'],{ state: { usermail: this.usermail } });  
       //this.router.navigateByUrl('otpform');
    })

  }

}
