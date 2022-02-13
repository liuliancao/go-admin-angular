import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BpmnComponent } from './bpmn.component';
import { BpmnToolModule } from '../bpmn-tool/bpmn-tool.module';

@NgModule({
    declarations: [BpmnComponent],
    imports: [
        CommonModule,
        BpmnToolModule
    ],
    exports: [BpmnComponent]
})
export class BpmnModule { }
