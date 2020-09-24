import { ApiService } from './api.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuccessModalComponent} from '../shared/custom-models/success-model/success-modal.component';

@NgModule({
  declarations: [
    SuccessModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers   : [
    ApiService,
],
entryComponents: [
  SuccessModalComponent,

],
})
export class SharedModule { }
