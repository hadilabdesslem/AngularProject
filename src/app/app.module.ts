import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponentComponent } from './cv-component/cv-component.component';
import { CouleurComponentComponent } from './couleur-component/couleur-component.component';
import { FormsModule } from '@angular/forms';
import { CvComponent } from './cv/cv.component';
@NgModule({
  declarations: [
    AppComponent,
    CvComponentComponent,
    CouleurComponentComponent,
    CvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
