import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProductUserComponent } from './modal-product-user.component';

describe('ModalProductUserComponent', () => {
  let component: ModalProductUserComponent;
  let fixture: ComponentFixture<ModalProductUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalProductUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalProductUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
