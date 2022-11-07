import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookeryComponent } from './cookery.component';

describe('CookeryComponent', () => {
  let component: CookeryComponent;
  let fixture: ComponentFixture<CookeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookeryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CookeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
