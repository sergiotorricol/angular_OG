import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { FormsModule } from '@angular/forms';
import { PersonaModule } from './modules/persona/persona.module';
import { EstudianteModule } from './modules/estudiante/estudiante.module';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PersonaModule,
    EstudianteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
