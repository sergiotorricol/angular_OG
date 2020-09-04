import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  
  {path: '', redirectTo: 'pagess', pathMatch: 'full'},
  {path: 'pagess', loadChildren: () => import('./pagess/pagess.module').then(m => m.PagessModule)},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }