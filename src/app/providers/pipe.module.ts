import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FixedLengthPipe } from './length.pipe';
import { FilterSearch } from './filter.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FixedLengthPipe,
    FilterSearch
  ],
  exports:[FixedLengthPipe,FilterSearch],
})
export class PipeModule { }
