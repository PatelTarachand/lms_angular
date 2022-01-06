import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CandidateListService } from '../candidate-list.service';
import { CandidateList } from './candidate-list';
import { Router } from '@angular/router';
import { __values } from 'tslib';
@Component({
  selector: 'app-all-admission-request-list',
  templateUrl: './all-admission-request-list.component.html',
  styleUrls: ['./all-admission-request-list.component.css']
})
export class AllAdmissionRequestListComponent implements OnInit {
  p: number = 1;
  // tslint:disable-next-line:no-any
  public studentlist: any ;
  studlist = new CandidateList();
  loading!: boolean;

  constructor(
    // tslint:disable-next-line:variable-name
    private _candidateList: CandidateListService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.getStudentList();
  }

  // tslint:disable-next-line:typedef
  getStudentList(){
    this.loading = true;
    this._candidateList.getStudentList().subscribe(
      res => {
        this.loading = false;
        this.studentlist = res;
       // console.log(this.studentlist);

      },
      err => console.error(err),
      () => console.log('getStudent completed')

    );

  }
}
