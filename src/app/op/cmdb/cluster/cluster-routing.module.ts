import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClusterComponent } from './cluster.component';
import { ClusterDetailComponent } from './cluster-detail/cluster-detail.component';
import { ClusterConfigComponent } from './cluster-config/cluster-config.component';

const routes: Routes = [
    { path: '', component: ClusterComponent },
    { path: ':id', component: ClusterDetailComponent },
    { path: ':id/config', component: ClusterConfigComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClusterRoutingModule { }
