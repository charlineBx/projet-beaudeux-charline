import { Pipe, PipeTransform } from '@angular/core';
import { Produit } from './models/produit';
@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: Array<Produit>, searchText: string): Array<Produit> {
    if (!items) return [];
    if (!searchText) return items;

    return items.filter((item) =>
      item.titre.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}
