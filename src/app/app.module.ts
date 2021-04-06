import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DepShowDeleteComponent } from './departments/dep-show-delete/dep-show-delete.component';
import { DepAddEditComponent } from './departments/dep-add-edit/dep-add-edit.component';
import { TeammatesComponent } from './teammates/teammates.component';
import { TeamShowDeleteComponent } from './teammates/team-show-delete/team-show-delete.component';
import { TeamAddEditComponent } from './teammates/team-add-edit/team-add-edit.component';

import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms/';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentsComponent,
    DepShowDeleteComponent,
    DepAddEditComponent,
    TeammatesComponent,
    TeamShowDeleteComponent,
    TeamAddEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
