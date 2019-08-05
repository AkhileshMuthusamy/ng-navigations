import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NavDrawerComponent } from './nav-drawer/nav-drawer.component';

const routes: Routes = [{path: 'sidenav', component: SidenavComponent},
{path: 'nav-drawer', component: NavDrawerComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
