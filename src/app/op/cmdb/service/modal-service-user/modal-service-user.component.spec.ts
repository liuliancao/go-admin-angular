import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalServiceUserComponent } from './modal-service-user.component';

describe('ModalServiceUserComponent', () => {
  let component: ModalServiceUserComponent;
  let fixture: ComponentFixture<ModalServiceUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalServiceUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalServiceUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
