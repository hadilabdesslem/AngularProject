import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouleurComponentComponent } from './couleur-component.component';

describe('CouleurComponentComponent', () => {
  let component: CouleurComponentComponent;
  let fixture: ComponentFixture<CouleurComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CouleurComponentComponent]
    });
    fixture = TestBed.createComponent(CouleurComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
