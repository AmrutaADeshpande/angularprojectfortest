import { Component, OnInit } from '@angular/core';
import { CommanservicesService } from 'src/app/services/commanservices.service';
import { AppConstantsService } from 'src/app/constants/app-constants.service';
import { Router } from '@angular/router';
declare var Fingerprint2: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  data: any = [];
  logindata: any = {};
  userUid: any;
  hash;
  platform: any;
  securityActions: any = [];
  message: any;
  constructor(private commanservicesService: CommanservicesService,
    public constant: AppConstantsService,
    public router: Router) { }

  ngOnInit() {
   
  }

  login() {
    this.logindata.uuid = this.hash;
    this.logindata.platform = this.platform;
    this.commanservicesService.Loginrequest(this.logindata, 'auth/authenticate').subscribe(response => {
      this.data = response;
     
      if (this.constant.SUCCESS === response.status) {
        if (this.data.result.userGroups) {
          this.data.result.userGroups.forEach(element => {
            element.securityGroup.securityGroupActions.forEach(element2 => {
              if (element2.securityAction) {
                if (this.securityActions.indexOf({ module: element2.securityAction.module, actionName: element2.securityAction.actionName }) == -1) {
                  this.securityActions.push({ module: element2.securityAction.module, actionName: element2.securityAction.actionName })
                }
              }
            });
          });
        }
       
        this.router.navigate(['/']);
      
      }
    });
  }

  
}
