import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NavDrawerComponent } from './nav-drawer/nav-drawer.component';
import { NavDrawerQtiComponent } from './nav-drawer-qti/nav-drawer-qti.component';
import { NavBarSubmenusComponent } from './nav-bar-submenus/nav-bar-submenus.component';

const routes: Routes = [
  { path: 'sidenav', component: SidenavComponent },
  { path: 'nav-drawer', component: NavDrawerComponent },
  { path: 'nav-drawer2', component: NavDrawerQtiComponent },
  { path: 'nav-submens', component: NavBarSubmenusComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
