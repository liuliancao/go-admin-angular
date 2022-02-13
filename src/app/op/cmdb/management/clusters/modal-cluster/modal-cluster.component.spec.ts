import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalClusterComponent } from './modal-cluster.component';

describe('ModalClusterComponent', () => {
  let component: ModalClusterComponent;
  let fixture: ComponentFixture<ModalClusterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalClusterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalClusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
