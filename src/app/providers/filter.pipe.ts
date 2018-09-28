import { Pipe, PipeTransform } from '@angular/core';

@Pipe(
  {
    name: 'filterSearch'
  }
)
export class FilterSearch implements PipeTransform {
    transform(items: Array<object>, searchText: string): any[] {
        if(!items) return [];
        if(!searchText) return items;
    searchText = searchText.toLowerCase();
   items.forEach(element => {
     element["name"] 
   });
   
    return items["name"].filter( it => {
          return it.toLowerCase().includes(searchText);
        });
       }
}