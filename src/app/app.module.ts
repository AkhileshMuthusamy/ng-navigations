import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NavDrawerComponent } from './nav-drawer/nav-drawer.component';
import { NavDrawerQtiComponent } from './nav-drawer-qti/nav-drawer-qti.component';
import { NavBarSubmenusComponent } from './nav-bar-submenus/nav-bar-submenus.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    NavDrawerComponent,
    NavDrawerQtiComponent,
    NavBarSubmenusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
