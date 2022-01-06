import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AdmissionFormService } from '../admission-form.service';
import { AdmissionFormData } from '../candidate-admission-form/AdmissionFormData';
import { PreviewFormService } from '../preview-form.service';

@Component({
  selector: 'app-preview-admission-form',
  templateUrl: './preview-admission-form.component.html',
  styleUrls: ['./preview-admission-form.component.css'],
  providers: [AdmissionFormService],
})
export class PreviewAdmissionFormComponent implements OnInit {
  private _admissionFormService: AdmissionFormService;
  public firstName: String = '';
  public lastName: string = '';
  public fatherName: string = '';
  public motherName: string = '';
  public mobileNumber: string = '';
  public emailId: string = '';
  public aadharNumber: string = '';
  public addressLocal: string = '';
  public pinCode: string = '';
  public boardName: string = '';
  public passedYear: string = '';
  public marks: string = '';
  public cgpa: string = '';
  public waNumber: string = '';
  public twitterId: string = '';
  public fbId: string = '';
  public instaId: string = '';
  submitted = false;
  selectCourse: any;
  selectYear: any;
  selectMonth: any;
  selectDay: any;
  selectGender: any;
  selectCategory: any;
  selectCountry: any;
  selectState: any;
  selectDistrict: any;
  selectQualification: any;
  categoryFile!: File;
  aadharFile!: File;
  candidatePhoto!: File;
  marksheetFile10!: File;
  marksheetFile12!: File;

  constructor(
    _admissionFormService: AdmissionFormService,
    private _previewAdmissionForm: PreviewFormService
  ) {
    this._admissionFormService = _admissionFormService;
  }

  selectedMessage!: AdmissionFormData;
  session!: string | null;
  ngOnInit() {
    // this._admissionFormService.currentMessage.subscribe(
    //   (message: AdmissionFormData) => (this.selectedMessage = message)
    // ); //<= Always get current value!
    console.log("preview component"+this.fatherName);
    this._previewAdmissionForm.formData$.subscribe((message) => {
      this.firstName = message.firstName;
      this.lastName = message.lastName;
      this.fatherName = message.fatherName;
      this.motherName = message.motherName;
      this.mobileNumber = message.mobileNumber;
      this.emailId = message.emailId;
      this.aadharNumber = message.aadharNumber;
      this.addressLocal = message.addressLocal;
      this.pinCode = message.pinCode;
      this.boardName = message.boardName;
      this.passedYear = message.passedYear;
      this.marks = message.marks;
      this.cgpa = message.cgpa;
      this.waNumber = message.waNumber;
      this.twitterId = message.twitterId;
      this.fbId = message.fbId;
      this.instaId = message.instaId;
      this.selectCourse = message.course;
      this.selectYear = message.year;
      this.selectMonth = message.month;
      this.selectDay = message.day;
      this.selectGender = message.gender;
      this.selectCategory = message.category;
      this.selectCountry = message.country;
      this.selectState = message.state;
      this.selectDistrict = message.district;
      this.selectQualification = message.qualification;
      this.categoryFile;
      this.aadharFile;
      this.candidatePhoto;
      this.marksheetFile10;
      this.marksheetFile12;
      console.log("preview component"+this.fatherName);
    });
  }
}
