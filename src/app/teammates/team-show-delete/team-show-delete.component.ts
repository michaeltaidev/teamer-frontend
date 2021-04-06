import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-team-show-delete',
  templateUrl: './team-show-delete.component.html',
  styleUrls: ['./team-show-delete.component.css']
})
export class TeamShowDeleteComponent implements OnInit {

  constructor(private service: SharedService) { }

  TeammateList:any = [];
  ModalTitle:string;
  ActivateTeamAddEditComp:boolean = false;
  teammate:any;

  ngOnInit(): void {
    this.refreshTeammateList();
  }

  addClick() {
    this.teammate = {
      TeammateId: 0,
      TeammateName: "",
      Department: "",
      JoinDate: "",
      ProfilePicFileName: "anonymous.png"
    }

    this.ModalTitle = "Add Teammate";
    this.ActivateTeamAddEditComp = true;
  }

  closeClick() {
    this.ActivateTeamAddEditComp = false;
    this.refreshTeammateList();
  }

  editClick(item) {
    this.teammate = item;
    this.ModalTitle = "Edit Teammate"
    this.ActivateTeamAddEditComp = true;
  }

  deleteClick(item) {
    if (confirm('Are you sure you want to permanently delete this?')) {
      this.service.deleteTeammate(item.TeammateId).subscribe(data => {
        alert(data.toString());
        this.refreshTeammateList();
      })
    }
  }

  refreshTeammateList() {
    this.service.getTeammateList().subscribe(data => {
      this.TeammateList = data;
    })
  }
}
