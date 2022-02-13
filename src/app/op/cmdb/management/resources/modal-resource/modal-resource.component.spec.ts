import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalResourceComponent } from './modal-resource.component';

describe('ModalResourceComponent', () => {
  let component: ModalResourceComponent;
  let fixture: ComponentFixture<ModalResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalResourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
