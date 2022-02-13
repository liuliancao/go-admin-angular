import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResourceDetailComponent } from './add-resource-detail.component';

describe('AddResourceDetailComponent', () => {
  let component: AddResourceDetailComponent;
  let fixture: ComponentFixture<AddResourceDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddResourceDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddResourceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
