import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';
import { LoginComponent } from '../login/login.component';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

constructor(private _userDialog: MatDialog, private _userService: UserService, private _router: Router){}
  userSignup(){
  const dialogConfig = new MatDialogConfig()
  dialogConfig.width = '70rem'
  dialogConfig.position = {right: '10px', top:'5px'}
  dialogConfig.disableClose = true
   this._userDialog.open(SignupComponent, dialogConfig)
  }

  userLogin(){
    const dialogConfig = new MatDialogConfig()
    dialogConfig.width = '70rem'
    dialogConfig.position = {right: '10px', top:'5px'}
    dialogConfig.disableClose = true
    this._userDialog.open(LoginComponent, dialogConfig)
  }


  ngOnInit(): void {
    if(localStorage.getItem('token') != null){
        this._userService.checkToken()
        .subscribe((res: any) => {
          this._router.navigate(['/rsk/dashboard'])
        },(err: any) => {
          this._router.navigate(['/home'])
        })
    }
  }


}
