import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHtmlFormComponent } from './add-html-form.component';

describe('AddHtmlFormComponent', () => {
  let component: AddHtmlFormComponent;
  let fixture: ComponentFixture<AddHtmlFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHtmlFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHtmlFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
