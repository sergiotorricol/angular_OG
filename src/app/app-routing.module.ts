import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/*import {HomeComponent} from './components/home/home.component';
import {AdminComponent} from './components/admin/admin.component';
import {AboutComponent} from './components/about/about.component';
import {Home1Component} from './components/home1/home1.component';
import {Home2Component} from './components/home2/home2.component';*/

const routes: Routes = [
  
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  {path: 'pagess', loadChildren: () => import('./pagess/pagess.module').then(m => m.PagessModule)},
  
];

/*const routes: Routes = [
  
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
  {path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule)},
  {path: 'list', loadChildren: () => import('./pages/list/list.module').then(m => m.ListModule)}

  /*{
    path: 'home',
    component: HomeComponent,
    children: [
      {path: 'home1', component: Home1Component},
      {path: 'home2', component: Home2Component}
    ]
  },
  {path: 'admin', component: AdminComponent},
  {path: 'about', component: AboutComponent},
  {path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)} |aqui acababa el comentraio de adentro|
];*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }