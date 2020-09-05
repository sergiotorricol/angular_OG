import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './components/parent/parent.component';
const routes: Routes = [
    {path:'', redirectTo:'teacher',pathMatch:'full'},
    {path: 'teacher', loadChildren: () => import('./modules/teacher/teacher.module').then(m => m.TeacherModule)},
    {path: 'student', loadChildren: () => import('./modules/student/student.module').then(m => m.StudentModule)},
    {path: 'parent', component: ParentComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }