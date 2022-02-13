import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalClusterHostComponent } from './modal-cluster-host.component';

describe('ModalClusterHostComponent', () => {
  let component: ModalClusterHostComponent;
  let fixture: ComponentFixture<ModalClusterHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalClusterHostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalClusterHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
