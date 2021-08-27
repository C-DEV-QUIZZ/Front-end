import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Globals } from '../global';

import { ScoreSoloComponent } from './score-solo.component';

describe('ScoreSoloComponent', () => {
  let component: ScoreSoloComponent;
  let fixture: ComponentFixture<ScoreSoloComponent>;
  let global: Globals;
  beforeEach(async () => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(BrowserDynamicTestingModule,
    platformBrowserDynamicTesting());
    window.history.pushState({ points: 138}, '', '');
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule], // <====
      declarations: [ ScoreSoloComponent ]
    })
    .compileComponents();


    global = TestBed.inject(Globals);
    spyOn(global,"if_Undefind_EmptyOrSpaces").and.returnValue(true);
    spyOn(global,"errorAction").and.callThrough();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreSoloComponent);
    component = fixture.componentInstance;
    window.history.pushState({ points: 138}, '', '');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
