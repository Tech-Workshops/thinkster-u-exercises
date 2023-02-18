import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlopChooserComponent } from './flop-chooser.component';

describe('FlopChooserComponent', () => {
  let component: FlopChooserComponent;
  let fixture: ComponentFixture<FlopChooserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlopChooserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlopChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
