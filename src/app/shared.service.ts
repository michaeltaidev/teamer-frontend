import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "https://teamerwebapp.herokuapp.com";
  // readonly ProfilePicUrl = "http://127.0.0.1:8000/media/"
  readonly ProfilePicUrl = "https://teamer.s3-us-west-1.amazonaws.com/"
  

  constructor(private http:HttpClient) { }

  getDepartmentNames():Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/departments/')
  }

  getDepartmentList():Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/departments/');
  }

  addDepartment(val:any) {
    return this.http.post(this.APIUrl + '/departments/', val);
  }

  editDepartment(val:any) {
    return this.http.put(this.APIUrl + '/departments/', val);
  }

  deleteDepartment(val:any) {
    return this.http.delete(this.APIUrl + '/departments/' + val);
  }

  getTeammateList():Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/teammates/');
  }

  addTeammate(val:any) {
    return this.http.post(this.APIUrl + '/teammates/', val);
  }

  editTeammate(val:any) {
    return this.http.put(this.APIUrl + '/teammates/', val);
  }

  deleteTeammate(val:any) {
    return this.http.delete(this.APIUrl + '/teammates/' + val);
  }

  UploadProfilePic(val:any) {
    return this.http.post(this.APIUrl + '/saveFile', val);
  }
}
