import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import { ModeSoloComponent } from './mode-solo.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ModeSoloComponent', () => {
  let component: ModeSoloComponent;
  let fixture: ComponentFixture<ModeSoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule,HttpClientTestingModule ],
      declarations: [ ModeSoloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeSoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
