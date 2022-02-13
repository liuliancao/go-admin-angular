import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../@core/services/auth-guard-service.guard';
import { OpComponent } from './op.component';
import { CmdbComponent } from './cmdb/cmdb.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WorkflowComponent } from './workflow/workflow.component';

const routes: Routes = [
    {
        path: '',
        component: OpComponent,
        children: [
            {
                path: 'dashboard',
                loadChildren: () =>
                    import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
            },
            {
                path: 'cmdb',
                loadChildren: () =>
                import('./cmdb/cmdb.module').then((m) => m.CmdbModule),
                canActivate: [AuthGuardService]
            },
            {
                path: 'deploy',
                loadChildren: () =>
                import('./deploy/deploy.module').then((m) => m.DeployModule),
                canActivate: [AuthGuardService]
            },
            {
                path: 'config',
                loadChildren: () =>
                import('./config/config.module').then((m) => m.ConfigModule),
                canActivate: [AuthGuardService]
            },

            {
                path: 'workflow',
                loadChildren: () =>
                import('./workflow/workflow.module').then((m) => m.WorkflowModule),
                canActivate: [AuthGuardService]
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            }
        ],

    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpRoutingModule { }
