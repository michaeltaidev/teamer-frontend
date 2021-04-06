import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeammatesComponent } from './teammates/teammates.component'
import { DepartmentsComponent } from './departments/departments.component'

const routes: Routes = [
  { path: 'teammates', component:TeammatesComponent },
  { path: 'departments', component:DepartmentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
