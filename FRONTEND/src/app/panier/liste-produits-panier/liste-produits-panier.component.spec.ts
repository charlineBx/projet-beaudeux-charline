import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeProduitsPanierComponent } from './liste-produits-panier.component';

describe('ListeProduitsPanierComponent', () => {
  let component: ListeProduitsPanierComponent;
  let fixture: ComponentFixture<ListeProduitsPanierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeProduitsPanierComponent]
    });
    fixture = TestBed.createComponent(ListeProduitsPanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
