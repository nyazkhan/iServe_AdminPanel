import { Pipe, PipeTransform } from '@angular/core';

@Pipe(
  {
    name: 'fixedLength'
  }
)
export class FixedLengthPipe implements PipeTransform {
  transform(value: string): string {
    if (value.length > 15) {
      value = value.substring(0, 15) + "...";
    }
    return value;
  }
}