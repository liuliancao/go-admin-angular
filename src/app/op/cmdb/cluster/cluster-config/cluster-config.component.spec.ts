import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClusterConfigComponent } from './cluster-config.component';

describe('ClusterConfigComponent', () => {
  let component: ClusterConfigComponent;
  let fixture: ComponentFixture<ClusterConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClusterConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClusterConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
