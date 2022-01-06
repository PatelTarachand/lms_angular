import { Component, OnInit } from '@angular/core';
import { CandidateListService } from '../candidate-list.service';
import { Courses } from '../courses';
import { ActivatedRoute, Router } from '@angular/router';
import { __values } from 'tslib';

@Component({
  selector: 'app-candiate-status-coursewise',
  templateUrl: './candiate-status-coursewise.component.html',
  styleUrls: ['./candiate-status-coursewise.component.css']
})
export class CandiateStatusCoursewiseComponent implements OnInit {

   // tslint:disable-next-line:no-inferrable-types
   p: number = 1;
   // tslint:disable-next-line:no-any
   public studcntcrswise: any ;
   public studstscntcrswise: any ;
   studentcntcrswise = new Courses();
   // tslint:disable-next-line:no-any
   data: any;
   statusdata: any;
   // tslint:disable-next-line:variable-name
   status_id: any = '';
   objectKeys = Object.keys;
  loading!: boolean;
  // tslint:disable-next-line:variable-name
   req_status_id: any;
   constructor(
     // tslint:disable-next-line:variable-name
     private _candidateList: CandidateListService,
     public router: Router,
     private route: ActivatedRoute
   ) { }

   ngOnInit(): void {
    this.loading = true;
    // console.log('status_id:- ' + this.route.snapshot.params.status);
    this.status_id = this.route.snapshot.params.status;
    sessionStorage.setItem('status_id', this.status_id);
    // this.req_status_id = sessionStorage.getItem(this.status_id);
    // tslint:disable-next-line:variable-name
    const app_rej_status = sessionStorage.getItem('status_id');
    console.log('seession data lalit ' + app_rej_status);
    this.getStudentStatusCourseWiseCount();
   }

     // tslint:disable-next-line:typedef
     getStudentStatusCourseWiseCount(){
       // tslint:disable-next-line:variable-name
       const app_rej_status = sessionStorage.getItem('status_id');
       console.log('seession data lalit ' + app_rej_status);
       this.loading = true;
       this._candidateList.getSudentStatusCourseWiseCount(this.status_id).subscribe(
         res => {
          this.loading = false;
          this.studstscntcrswise = res;
          this.statusdata =  this.studstscntcrswise;
           // console.log('studcntcrswise' + this.data);
         },
         err => console.error(err),
         () => console.log('getStudent completed')
       );
     }

}
