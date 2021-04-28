import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';


// primeng
import { ToolbarModule } from 'primeng-lts/toolbar';
import { ButtonModule } from 'primeng-lts/button';
import { OverlayPanelModule } from 'primeng-lts/overlaypanel';
import { CardModule } from 'primeng-lts/card';
import { InputTextModule } from 'primeng-lts/inputtext';
import { PasswordModule } from 'primeng-lts/password';
import { ToastModule } from 'primeng-lts/toast';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    // primeng
    ToolbarModule,
    ButtonModule,
    OverlayPanelModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
