import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import Swal from 'sweetalert2'

import { ApiService } from '../../../shared/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  @ViewChild('login') myNgForm;
  constructor(
    private formBuilder: FormBuilder,
    private _apiService: ApiService,
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required,Validators.minLength(6)]]
    });
  }

  onSubmit() {

         this._apiService.userSignIn(this.loginForm.value)
            .subscribe(response => {
              console.log(response)
                if(response.status == 200)
                {
                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login successfully',
                    showConfirmButton: false,
                    timer: 3000
                  })
                }
                else 
                 { 
                    Swal.fire({
                      position: 'top-end',
                      icon: 'warning',
                      title: response.message,
                      showConfirmButton: false,
                      timer: 3000
                    })
                    this.loginForm.reset();
                 }     
             },
           error => {
            Swal.fire({
              position: 'top-end',
              icon: 'warning',
              title: "Something went wrong",
              showConfirmButton: false,
              timer: 3000
            })
            this.loginForm.reset(); 
           });

  }

}
