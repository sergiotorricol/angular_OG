import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagessRoutingModule } from './pagess-routing.module';
import { PagessComponent } from './pagess/pagess.component';

@NgModule({
    declarations: [
        PagessComponent
    ],
    imports: [
        CommonModule,
        PagessRoutingModule
    ]
})

export class PagessModule { }