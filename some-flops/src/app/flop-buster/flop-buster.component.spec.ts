import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlopBusterComponent } from './flop-buster.component';

describe('FlopBusterComponent', () => {
  let component: FlopBusterComponent;
  let fixture: ComponentFixture<FlopBusterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlopBusterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlopBusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
