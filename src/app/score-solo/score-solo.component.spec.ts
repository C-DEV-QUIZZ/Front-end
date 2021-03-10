import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreSoloComponent } from './score-solo.component';

describe('ScoreSoloComponent', () => {
  let component: ScoreSoloComponent;
  let fixture: ComponentFixture<ScoreSoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreSoloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreSoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
