import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpmnToolComponent } from './bpmn-tool.component';

describe('BpmnToolComponent', () => {
  let component: BpmnToolComponent;
  let fixture: ComponentFixture<BpmnToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BpmnToolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BpmnToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
