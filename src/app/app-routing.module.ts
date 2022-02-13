import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { AuthGuardService } from './@core/services/auth-guard-service.guard';
import { LoginComponent } from './@shared/components/login/login.component';
import { OpComponent } from './op/op.component';

const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./op/op.module').then((m) => m.OpModule),
        canActivate: [AuthGuardService],
    },
  {
    path: 'login',
    component: LoginComponent
  },
];

const config: ExtraOptions = {
  useHash: false
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
