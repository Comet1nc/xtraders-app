import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BtnAddComponent } from './btn-add/btn-add.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';

@NgModule({
  declarations: [BtnAddComponent, LoadingScreenComponent],
  imports: [CommonModule],
  providers: [],
  exports: [BtnAddComponent, LoadingScreenComponent],
})
export class OverlayModule {}
