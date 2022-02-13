import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementComponent } from './management.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ClustersComponent } from './clusters/clusters.component';
import { UsersComponent } from './users/users.component';
import { ResourcesComponent } from './resources/resources.component';

const routes: Routes = [
    {
        path: '',
        component: ManagementComponent,
        children: [
            {
                path: 'products', component: ProductsComponent,
            },
            {
                path: 'services', component: ServicesComponent,
            },
            {
                path: 'clusters', component: ClustersComponent,
            },
            {
                path: 'users', component: UsersComponent,
            },
            {
                path: 'resources', component: ResourcesComponent,
            },
            {
                path: 'home', component: HomeComponent,
            },
            {
                path: '', redirectTo: 'home', pathMatch: 'full',
            }
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
