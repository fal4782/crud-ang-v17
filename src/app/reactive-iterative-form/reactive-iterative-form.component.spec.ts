import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveIterativeFormComponent } from './reactive-iterative-form.component';

describe('ReactiveIterativeFormComponent', () => {
  let component: ReactiveIterativeFormComponent;
  let fixture: ComponentFixture<ReactiveIterativeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveIterativeFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReactiveIterativeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
