import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { Home1Component } from './components/home1/home1.component';
import { Home2Component } from './components/home2/home2.component';


import { FormsModule } from '@angular/forms';
import { PersonaModule } from './modules/persona/persona.module';
import {ProductoModule} from './modules/producto/producto.module';
import{AdminModule}from './modules/admin/admin.module';
import{UserModule}from './modules/user/user.module';

import {TestPipe }from './pipes/test.pipe';
import {ExponentPipe }from './pipes/exponent.pipe';
import {PurePipe }from './pipes/pure.pipe';
import {ImpurePipe }from './pipes/impure.pipe';

import { NgColorDirective } from './directives/ng-color.directive';
import { NgFocusDirective } from './directives/ng-focus.directive';

import { AppRouting } from './app.routing';

import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    AboutComponent,
    AdminComponent,
    HomeComponent,
    Home1Component,
    Home2Component,
    TestPipe,
    ExponentPipe,
    PurePipe,
    ImpurePipe,
    NgColorDirective,
    NgFocusDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PersonaModule,
    ProductoModule,
    AdminModule,
    UserModule,
    AppRouting
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
