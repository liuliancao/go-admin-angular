import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/@shared/shared.module';
import { AdminFormModule } from 'src/app/@shared/components/admin-form/admin-form.module';
import { ResourcesRoutingModule } from './resources-routing.module';
import { ResourcesComponent } from './resources.component';
import { ModalResourceComponent } from './modal-resource/modal-resource.component';
import { ModalResourceTypeComponent } from './modal-resource-type/modal-resource-type.component';
import { AddHtmlFormComponent } from './add-html-form/add-html-form.component';
import { AddResourceDetailComponent } from './add-resource-detail/add-resource-detail.component';


@NgModule({
  declarations: [
    ResourcesComponent,
    ModalResourceComponent,
    ModalResourceTypeComponent,
    AddHtmlFormComponent,
    AddResourceDetailComponent
  ],
  imports: [
    CommonModule,
      ResourcesRoutingModule,
      SharedModule,
      AdminFormModule,
  ]
})
export class ResourcesModule { }
