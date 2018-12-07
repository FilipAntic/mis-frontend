import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  updateForm: FormGroup;
  updatePasswordForm: FormGroup;
  profileId = '';
  user: any;
  constructor(private formBuilder: FormBuilder, private backend: BackendService, private route: ActivatedRoute, private auth: AuthService) { }

  ngOnInit() {
    this.createForm();
    this.profileId = this.route.snapshot.paramMap.get("profileId");
    this.backend.getProfileData(this.profileId).subscribe((response: HttpResponse<Object>) => {
      this.user = response.body;
    });
  }

  createForm() {
    this.updateForm = this.formBuilder.group({
      'email': [null],
      'firstName': [null],
      'lastName': [null],
      'description': [null]
    })
    this.updatePasswordForm = this.formBuilder.group({
      'oldPassword': [null],
      'newPassword': [null],
      'repeatedPassword': [null]
    })
  }

  update() {
    this.backend.updateProfile(
      this.updateForm.controls['email'].value,
      this.updateForm.controls['firstName'].value,
      this.updateForm.controls['lastName'].value,
      this.updateForm.controls['description'].value).subscribe((response: HttpResponse<Object>) => {
        console.log(response);
      });
  }

  canEditProfile() {
    return this.profileId === this.auth.getId() ? false : true;
  }

  updatePassword() {
    this.backend.updatePassword(this.profileId,
      this.updatePasswordForm.controls['oldPassword'].value,
      this.updatePasswordForm.controls['newPassword'].value,
      this.updatePasswordForm.controls['repeatedPassword'].value).subscribe((response: HttpResponse<Object>) => {
        console.log(response);
      });
  }


}
