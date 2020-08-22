import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Producto1Component} from './components/producto1/producto1.component';
import {Producto2Component} from './components/producto2/producto2.component';
import {Producto3Component} from './components/producto3/producto3.component';
import { PersonaModule } from '../persona/persona.module';
@NgModule({
    imports:[
        CommonModule,
        PersonaModule
    ],
    declarations:[
        Producto1Component,
        Producto2Component,
        Producto3Component
    ],
    exports:[
        Producto1Component,
        Producto2Component,
        Producto3Component
    ]
})
export class ProductoModule{}