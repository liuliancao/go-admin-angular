import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceComponent } from './service.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { ServiceConfigComponent } from './service-config/service-config.component';

const routes: Routes = [
    { path: '', component: ServiceComponent },
    { path: ':id', component: ServiceDetailComponent },
    { path: ':id/config', component: ServiceConfigComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }
