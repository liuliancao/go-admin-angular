import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeployComponent } from './deploy.component';
import { HomeComponent } from './home/home.component';
import { ManagementComponent } from './management/management.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
    {
        path: '', component: DeployComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent,
            },
            {
                path: 'service/:id',
                component: ServiceComponent,
            },
            {
                path: 'manage',
                component: ManagementComponent,
            },
            { path: '', redirectTo: 'home', pathMatch: 'full'},
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeployRoutingModule { }
