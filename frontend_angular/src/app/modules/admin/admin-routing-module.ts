import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard'
import { PostTask } from './components/post-task/post-task';
import { UpdateTask } from './components/update-task/update-task';

const routes: Routes = [


  {path:"dashboard", component:Dashboard},
  { path: "task", component: PostTask},
  {path:"task/:id/edit", component:UpdateTask}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
