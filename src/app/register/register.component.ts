import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BackendService } from '../services/backend.service';
import { HttpResponse } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private backend: BackendService, private auth: AuthService) { }

  ngOnInit() {
    this.createForm();

  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      'email': [null],
      'password': [null]
    })
  }

  register() {
    this.backend.register(this.loginForm.controls['email'].value, this.loginForm.controls['password'].value).subscribe((response: HttpResponse<Object>) => {
      // this.auth.setToken(response.headers.get('Authorization'));
    });
  }
}
