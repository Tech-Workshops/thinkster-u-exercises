import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlopVotingComponent } from './flop-voting.component';

describe('FlopVotingComponent', () => {
  let component: FlopVotingComponent;
  let fixture: ComponentFixture<FlopVotingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlopVotingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlopVotingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
