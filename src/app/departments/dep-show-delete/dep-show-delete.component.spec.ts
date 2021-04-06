import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepShowDeleteComponent } from './dep-show-delete.component';

describe('DepShowDeleteComponent', () => {
  let component: DepShowDeleteComponent;
  let fixture: ComponentFixture<DepShowDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepShowDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepShowDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
