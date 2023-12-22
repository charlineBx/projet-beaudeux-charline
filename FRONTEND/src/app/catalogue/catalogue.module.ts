import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitsComponent } from './produits/produits.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './filter.pipe';

@NgModule({
  imports: [CommonModule, HttpClientModule, FormsModule],
  declarations: [ProduitsComponent, FilterPipe],

  exports: [ProduitsComponent],
})
export class CatalogueModule {}
