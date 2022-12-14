import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signupForm! : FormGroup
  constructor(private fb:FormBuilder) { 
    this.signupForm = this.fb.group
    ({
      'name': ['', Validators.required],
      'email':['', Validators.required],
      'password':['',Validators.required],
      'confirmpassword':['',Validators.required],
    })
  }

  ngOnInit(): void {
  }
 signup(){
  alert("Account has been created");
 }
}
