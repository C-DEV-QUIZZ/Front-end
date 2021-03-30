
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Globals } from '../global';
import { QuestionComponent } from './question.component';

describe('QuestionComponent', () => {
  let component: QuestionComponent;
  let fixture: ComponentFixture<QuestionComponent>;
  let global: Globals;


  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule], // <====
      declarations: [ QuestionComponent ],
    })
    
    .compileComponents();
    
    global = TestBed.inject(Globals);
    spyOn(global,"if_Undefind_EmptyOrSpaces").and.returnValue(true);
    spyOn(global,"errorAction").and.callThrough();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
