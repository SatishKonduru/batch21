import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { UserService } from 'src/app/services/user.service';
import { globalProperties } from 'src/app/shared/globalProperties';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  registerForm: any = FormGroup
  responseMsg : any = ''
constructor(private _formBuilder: FormBuilder,
  private _ngxService: NgxUiLoaderService,
  private _userService: UserService,
  private _dialogRef: MatDialogRef<SignupComponent>,
  private _snackbar: SnackbarService,
  private _router: Router){}

ngOnInit(): void {
  this.registerForm = this._formBuilder.group({
    username: [null, [Validators.required, Validators.pattern(globalProperties.nameRegx)]],
    password: [null, [Validators.required]],
    email: [null, [Validators.required, Validators.pattern(globalProperties.emailRegx)]],
    cnumber: [null, [Validators.required, Validators.pattern(globalProperties.contactNumberRegex)]]
  })
}

onRegister(){
  // console.log("Form Values: ", this.registerForm.value)
  this._ngxService.start()
  var formData = this.registerForm.value
  var data = {
    username: formData.username,
    email: formData.email,
    password: formData.password,
    cnumber: formData.cnumber
  }
  this._userService.signup(data)
  .subscribe((res: any) => {
    this._ngxService.stop()
    this._dialogRef.close()
    this.responseMsg = res?.message
    console.log("Response Message: ", this.responseMsg)
    this._snackbar.openSnackbar(this.responseMsg, '')
    this._router.navigate(['/'])

  }, (err: any) => {
    this._ngxService.stop()
    this._dialogRef.close()
    if(err.error?.message){
      this.responseMsg = err.error?.message
      console.log("Error message: ", this.responseMsg)
      this._snackbar.openSnackbar(this.responseMsg, globalProperties.error)
    }
  })


}


}
