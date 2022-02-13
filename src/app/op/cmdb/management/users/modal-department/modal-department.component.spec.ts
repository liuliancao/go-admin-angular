import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDepartmentComponent } from './modal-department.component';

describe('ModalDepartmentComponent', () => {
  let component: ModalDepartmentComponent;
  let fixture: ComponentFixture<ModalDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
