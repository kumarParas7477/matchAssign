import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GetREgisteredUsersService } from '../../service/get-registered-users.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  profileForm: FormGroup;
  
  Id: number;
  username: any;
 
  constructor(private fb: FormBuilder, private _createProfile: GetREgisteredUsersService, private _router: Router) { }
  ngOnInit(): void {

    this.profileForm = this.fb.group({
      Username: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      password: ['', Validators.required],
      Confirmpassword:['',Validators.required]
    });
  }

  get function() {
    return this.profileForm.controls;
  }


  saveProfile() {
    if(this.profileForm.value.password != this.profileForm.value.Confirmpassword){
      alert('Passwords dont match');
    }
    else{
    this.username = this.profileForm.value.Username.split('@');
    this.profileForm.value.Username = this.username[0].toLocaleLowerCase() + '@' + this.username[1].toLocaleLowerCase()
    this._createProfile.createProfile(this.profileForm.value).subscribe(data => (data));
    alert("You have Registered");
  
      this._router.navigate(['/public']);

    }

  }
  

}