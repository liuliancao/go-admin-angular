import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkflowComponent } from './workflow.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
    {
        path: '', component: WorkflowComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'create', component: CreateComponent },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
        ],
    },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkflowRoutingModule { }
