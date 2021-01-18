import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

const matModules = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
];

@NgModule({
  declarations: [],
  imports: matModules,
  exports: matModules,
})
export class MaterialModule {}
