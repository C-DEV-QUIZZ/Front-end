import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemarrageSoloComponent } from './demarrage-solo.component';

describe('DemarrageSoloComponent', () => {
  let component: DemarrageSoloComponent;
  let fixture: ComponentFixture<DemarrageSoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemarrageSoloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemarrageSoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
