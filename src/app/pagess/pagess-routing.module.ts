import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagessComponent } from './pagess/pagess.component';

const routes: Routes = [
    {path: '', component: PagessComponent, children: [
    {path:'', redirectTo:'admin',pathMatch:'full'},    
    {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)}
    
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PagessRoutingModule { }