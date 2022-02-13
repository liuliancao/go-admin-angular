import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CmdbComponent } from './cmdb.component';
import { HostComponent } from './host/host.component';
import { ManagementComponent } from './management/management.component';

const routes: Routes = [
    {
        path: '', component: CmdbComponent,
        children: [
            { path: 'hosts', component: HostComponent },
            {
                path: 'manage',
                loadChildren: () =>
                    import('./management/management.module').then((m) => m.ManagementModule),
            },
            {
                path: 'product',
                loadChildren: () =>
                    import('./product/product.module').then((m) => m.ProductModule),
            },
            {
                path: 'service',
                loadChildren: () =>
                    import('./service/service.module').then((m) => m.ServiceModule),
            },
            {
                path: 'cluster'  ,
                loadChildren: () =>
                    import('./cluster/cluster.module').then((m) => m.ClusterModule),
            },
            { path: '', redirectTo: 'hosts', pathMatch: 'full' },
        ],
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmdbRoutingModule { }
