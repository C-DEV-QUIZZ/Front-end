import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeMultiComponent } from './mode-multi.component';

describe('ModeMultiComponent', () => {
  let component: ModeMultiComponent;
  let fixture: ComponentFixture<ModeMultiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeMultiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeMultiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
