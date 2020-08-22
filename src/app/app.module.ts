import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { FormsModule } from '@angular/forms';
import { PersonaModule } from './modules/persona/persona.module';
import {ProductoModule} from './modules/producto/producto.module';
import{AdminModule}from './modules/admin/admin.module';
import{UserModule}from './modules/user/user.module';

import {TestPipe }from './pipes/test.pipe';
import {ExponentPipe }from './pipes/exponent.pipe';
import {PurePipe }from './pipes/pure.pipe';
import {ImpurePipe }from './pipes/impure.pipe';

import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestPipe,
    ExponentPipe,
    PurePipe,
    ImpurePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PersonaModule,
    ProductoModule,
    AdminModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
