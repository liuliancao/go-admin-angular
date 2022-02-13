import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalResourceTypeComponent } from './modal-resource-type.component';

describe('ModalResourceTypeComponent', () => {
  let component: ModalResourceTypeComponent;
  let fixture: ComponentFixture<ModalResourceTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalResourceTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalResourceTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
