import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule } from '@angular/material';

const materials = [MatButtonModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule];

@NgModule({
  imports: materials,
  exports: materials
})
export class MaterialModule { }
