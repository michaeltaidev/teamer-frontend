import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamShowDeleteComponent } from './team-show-delete.component';

describe('TeamShowDeleteComponent', () => {
  let component: TeamShowDeleteComponent;
  let fixture: ComponentFixture<TeamShowDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamShowDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamShowDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
