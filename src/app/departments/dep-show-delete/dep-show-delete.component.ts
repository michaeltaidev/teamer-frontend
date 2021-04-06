import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-dep-show-delete',
  templateUrl: './dep-show-delete.component.html',
  styleUrls: ['./dep-show-delete.component.css']
})
export class DepShowDeleteComponent implements OnInit {

  constructor(private service:SharedService) { }

  DepartmentList:any = [];
  ModalTitle:string;
  ActivateDepAddEditComp:boolean = false;
  dep:any;

  DepartmentNameFilter:string = "";
  DepartmentListNoFilter:any = [];

  DepartmentListIsAscending:boolean = true;

  ngOnInit(): void {
    this.refreshDepartmentList();
  }

  addClick() {
    this.dep = {
      DepartmentId: 0,
      DepartmentName: ""
    }

    this.ModalTitle = "Add Department";
    this.ActivateDepAddEditComp = true;
  }

  closeClick() {
    this.ActivateDepAddEditComp = false;
    this.refreshDepartmentList();
  }

  editClick(item) {
    this.dep = item;
    this.ModalTitle = "Edit Department"
    this.ActivateDepAddEditComp = true;
  }

  deleteClick(item) {
    if(confirm('Are you sure you want to permanently delete this?')) {
      this.service.deleteDepartment(item.DepartmentId).subscribe(data => {
        alert(data.toString());
        this.refreshDepartmentList();
      })
    }
  }

  refreshDepartmentList() {
    this.service.getDepartmentList().subscribe(data => {
      this.DepartmentList = data;
      this.DepartmentListNoFilter = data;
    })
  }

  filterDepartmentsList() {
    var DepartmentNameFilter = this.DepartmentNameFilter;

    this.DepartmentList = this.DepartmentListNoFilter.filter(function (el) {
      return el.DepartmentName.toString().toLowerCase().includes(
        DepartmentNameFilter.toString().trim().toLowerCase()
      )
    })
  }

  sortDepartmentList(prop) {
    this.DepartmentListIsAscending = !this.DepartmentListIsAscending;
    var isAscending = this.DepartmentListIsAscending;
    this.DepartmentList = this.DepartmentListNoFilter.sort(function(a, b){
      if (isAscending) {
        return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      } else {
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }
}
