import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AdmissionFormData } from './candidate-admission-form/AdmissionFormData';

@Injectable({
  providedIn: 'root',
})
export class PreviewFormService {
  private _previewFormSource = new Subject<AdmissionFormData>();
  constructor() {}
  formData$ = this._previewFormSource.asObservable();
  sendData(data: AdmissionFormData) {
    console.log("preview form data service "+data.fatherName);
    this._previewFormSource.next(data);
  }
}
