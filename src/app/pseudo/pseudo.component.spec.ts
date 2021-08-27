import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Globals } from '../global';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

import { PseudoComponent } from './pseudo.component';

describe('PseudoComponent', () => {
  let component: PseudoComponent;
  let fixture: ComponentFixture<PseudoComponent>;
  let global : Globals;
  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports:[RouterTestingModule,HttpClientTestingModule ],
      declarations: [ PseudoComponent ]
    })
    .compileComponents();
    global = TestBed.inject(Globals);
    spyOn(global,"if_Undefind_EmptyOrSpaces").and.returnValue(true);
    spyOn(global,"errorAction").and.callThrough();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PseudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
