import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalServiceClusterComponent } from './modal-service-cluster.component';

describe('ModalServiceClusterComponent', () => {
  let component: ModalServiceClusterComponent;
  let fixture: ComponentFixture<ModalServiceClusterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalServiceClusterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalServiceClusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
