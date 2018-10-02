import { Pipe, PipeTransform } from '@angular/core';

@Pipe(
  {
    name: 'filterSearch'
  }
)
export class FilterSearch implements PipeTransform {
    transform(items: Array<any>, searchText: string): any[] {
        if(!items) return [];
        if(!searchText) return items;
    searchText = searchText.toLowerCase();
  
   
   if (items[0].name) {
    return items.filter( element => {
      return element.name.toLowerCase().includes(searchText);
    });
   } else {
    return items.filter( element => {
      return element.toLowerCase().includes(searchText);
    });
   }
       }
}