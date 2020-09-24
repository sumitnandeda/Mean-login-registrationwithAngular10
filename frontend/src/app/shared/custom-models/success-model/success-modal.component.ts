import { Component, ViewEncapsulation, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector     : 'success-modal',
  templateUrl  : './success-modal.component.html',
  styleUrls    : ['./success-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SuccessModalComponent
{
  /**
   * Constructor
   *
   * @param {MatDialogRef<SuccessModalComponent>} matDialogRef
   * @param _data
   */
  constructor(
      public matDialogRef: MatDialogRef<SuccessModalComponent>,
      @Inject(MAT_DIALOG_DATA) public _data: any
  )
  {
  }
}

