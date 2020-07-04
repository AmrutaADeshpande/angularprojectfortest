import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { CommanservicesService } from 'src/app/services/commanservices.service';
import { Router } from '@angular/router';
import { AppConstantsService } from 'src/app/constants/app-constants.service';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [DatePipe]
})
export class HeaderComponent implements OnInit {
  subscription: Subscription;
  data: any = {};
  headerbackColor: any;
  CurrentSessionData: any = {};
  taskData: any = {};
  taskPriorities: any = [];
  tasksStatus: any = []
  repeatOn: any = [
    {
      name: 'Su'
    },
    {
      name: "M"
    },
    {
      name: 'Tu'
    },
    {
      name: 'W'
    },
    {
      name: 'Th'
    },
    {
      name: 'F'
    },
    {
      name: 'Sa'
    }
  ]
  repeatOnTxt: any = [];
  months: any = [];
  reminderDate: any = [];
  subjects: any = [
    {
      name: 'Email',
    },
    {
      name: 'Call',
    },
    {
      name: 'Meeting',
    },
    {
      name: 'Send Letter',
    },
    {
      name: 'Product Demo',
    },
    {
      name: 'Other',
    },
  ];
  purpose: any = []
  relatedto: any = [];
  callType: any = [];
  callResult: any = [];
  callReminder: any = [];
  logData: any = {};
  selectedfreq: any;
  
 
  
 
  constructor(public translate: TranslateService,
    public common: CommanservicesService,
    public constant: AppConstantsService,
    public datePipe: DatePipe,
    public router: Router, ) {
    this.taskData.priority = "High";
    this.subscription = this.common.getMessage().subscribe(message => {
      this.headerbackColor = message;
    })
   

   
  }

  ngOnInit() {
   
    this.CurrentSessionData = JSON.parse(sessionStorage.getItem('CurrentUser'));
    if (this.CurrentSessionData) {
      this.CurrentSessionData.firstName = this.CurrentSessionData.firstName + ' ' + this.CurrentSessionData.lastName;
    }
    if (this.CurrentSessionData && this.CurrentSessionData.themePreference) {
      this.headerbackColor = this.CurrentSessionData.themePreference;
    }
    if (!this.headerbackColor) {
      this.headerbackColor = "#343a40";
    }

  
    this.relatedto = this.constant.getConstantList("RELATED TO");
  
  }

  

  signout() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  

 



 

  

  openModelEvent() {
    $('#eventModel form')[0].reset();
   
   
   
    

  }

 
}
