import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FixedLengthPipe } from './length.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FixedLengthPipe
  ],
  exports:[FixedLengthPipe],
})
export class PipeModule { }
