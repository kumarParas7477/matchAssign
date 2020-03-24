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
  // data: IProfile;
  // tslint:disable-next-line:variable-name
  constructor(private fb: FormBuilder , private _createProfile: GetREgisteredUsersService , private _router: Router) {  }
  ngOnInit(): void {

this.profileForm = this.fb.group({
      username: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      password: ['', Validators.required],
      
      });
  }

  get function()  {
return this.profileForm.controls;
  }

  saveProfile() {


    this._createProfile.createProfile(this.profileForm.value).subscribe(data => (data));
    alert("You have Registered");
    setTimeout(() => { this._router.navigate(['/public']);

    }, 2000);

  }


}