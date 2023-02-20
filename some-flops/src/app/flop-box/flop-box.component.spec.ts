import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlopBoxComponent } from './flop-box.component';

describe('FlopBoxComponent', () => {
  let component: FlopBoxComponent;
  let fixture: ComponentFixture<FlopBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlopBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlopBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
