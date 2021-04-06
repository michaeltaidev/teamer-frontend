import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-team-add-edit',
  templateUrl: './team-add-edit.component.html',
  styleUrls: ['./team-add-edit.component.css']
})
export class TeamAddEditComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() teammate:any;
  TeammateId:string;
  TeammateName:string;
  Department:string;
  JoinDate:string;
  ProfilePicFileName:string;
  ProfilePicPath:string;

  DepartmentsList:any = [];

  ngOnInit(): void {
    this.loadDepartmentList();
  }

  getProfilePicPath():string {
    return this.service.ProfilePicUrl + this.ProfilePicFileName;
  }

  loadDepartmentList() {
    this.service.getDepartmentNames().subscribe((data:any) => {
      this.DepartmentsList = data;
      this.TeammateId = this.teammate.TeammateId;
      this.TeammateName = this.teammate.TeammateName
      this.Department = this.teammate.Department
      this.JoinDate = this.teammate.JoinDate
      this.ProfilePicFileName = this.teammate.ProfilePicFileName
      this.ProfilePicPath = this.getProfilePicPath();
    })
  }

  addTeammate() {
    // Should be in JSON format
    var val =
    {
      TeammateId: this.TeammateId,
      TeammateName: this.TeammateName,
      Department: this.Department,
      JoinDate: this.JoinDate,
      ProfilePicFileName: this.ProfilePicFileName
    };

    this.service.addTeammate(val).subscribe(res => {
      alert(res.toString());
    })
  }

  editTeammate() {
    // Should be in JSON format
    var val =
    {
      TeammateId: this.TeammateId,
      TeammateName: this.TeammateName,
      Department: this.Department,
      JoinDate: this.JoinDate,
      ProfilePicFileName: this.ProfilePicFileName
    };

    this.service.editTeammate(val).subscribe(res => {
      alert(res.toString());
    })
  }

  uploadProfilePic(event) {
    var file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('uploadedFile', file, file.name);
    this.service.UploadProfilePic(formData).subscribe((data:any) => {
      this.ProfilePicFileName = data.toString();
      this.ProfilePicPath = this.getProfilePicPath();
    })
  }
}
