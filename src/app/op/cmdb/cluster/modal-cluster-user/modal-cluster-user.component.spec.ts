import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalClusterUserComponent } from './modal-cluster-user.component';

describe('ModalClusterUserComponent', () => {
  let component: ModalClusterUserComponent;
  let fixture: ComponentFixture<ModalClusterUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalClusterUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalClusterUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
