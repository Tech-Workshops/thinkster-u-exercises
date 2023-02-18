import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlopChoiceComponent } from './flop-choice.component';

describe('FlopChoiceComponent', () => {
  let component: FlopChoiceComponent;
  let fixture: ComponentFixture<FlopChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlopChoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlopChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
