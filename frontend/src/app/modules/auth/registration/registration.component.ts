import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

import { Router, ActivatedRoute} from '@angular/router';
import Swal from 'sweetalert2'

import { ApiService } from '../../../shared/api.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  @ViewChild('register') myNgForm;
  constructor(
    private formBuilder: FormBuilder,
    private _apiService: ApiService,
    private _router :Router,
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm(): void {
    this.registerForm = this.formBuilder.group({
            username: ['', [Validators.required, Validators.minLength(4)]],
            email          : ['', [Validators.required, Validators.email]],
            phone          : ['', Validators.required],
            password       : ['', Validators.required],
            passwordConfirm: ['', [Validators.required, confirmPasswordValidator]],
    });
  }
  
  onSubmit() {

    this._apiService.userSignUp(this.registerForm.value)
       .subscribe(response => {
         console.log(response)
           if(response.status == 200)
           {
             Swal.fire({
               position: 'top-end',
               icon: 'success',
               title: response.message,
               showConfirmButton: false,
               timer: 3000
             })
             this._router.navigate(['/auth/login']);
           }
           else 
            { 
               Swal.fire({
                 position: 'top-end',
                 icon: 'warning',
                 title: response.message,
                 showConfirmButton: false,
                 timer: 5000
               })
               this.registerForm.reset();
            }     
        },
      error => {
       Swal.fire({
         position: 'top-end',
         icon: 'warning',
         title: "Something went wrong",
         showConfirmButton: false,
         timer: 5000
       })
       this.registerForm.reset(); 
      });

}

}

export const confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {

  if ( !control.parent || !control )
  {
      return null;
  }

  const password = control.parent.get('password');
  const passwordConfirm = control.parent.get('passwordConfirm');

  if ( !password || !passwordConfirm )
  {
      return null;
  }

  if ( passwordConfirm.value === '' )
  {
      return null;
  }

  if ( password.value === passwordConfirm.value )
  {
      return null;
  }

  return {'passwordsNotMatching': true};
};
