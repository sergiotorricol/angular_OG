import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudianteComponent } from './components/estudiante/estudiante.component';

@NgModule ({
    imports: [
        CommonModule
    ],
    declarations: [
        EstudianteComponent
    ],
    exports: [
        EstudianteComponent
    ]
})

export class EstudianteModule {
    
}