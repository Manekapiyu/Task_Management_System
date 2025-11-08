import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard'
import { PostTask } from './components/post-task/post-task';

const routes: Routes = [


  {path:"dashboard", component:Dashboard},
  { path: "task", component: PostTask}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
