import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-dep-add-edit',
  templateUrl: './dep-add-edit.component.html',
  styleUrls: ['./dep-add-edit.component.css']
})
export class DepAddEditComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() dep:any;
  DepartmentId:string;
  DepartmentName:string;

  ngOnInit(): void {
    this.DepartmentId = this.dep.DepartmentId;
    this.DepartmentName = this.dep.DepartmentName;
  }

  addDepartment() {
    // Should be in JSON format
    var val = 
      { 
        DepartmentId: this.DepartmentId,
        DepartmentName: this.DepartmentName
      };
    
    this.service.addDepartment(val).subscribe(res => {
      alert(res.toString());
    })
  }

  editDepartment() {
    // Should be in JSON format
    var val =
    {
      DepartmentId: this.DepartmentId,
      DepartmentName: this.DepartmentName
    };

    this.service.editDepartment(val).subscribe(res => {
      alert(res.toString());
    })
  }
}
