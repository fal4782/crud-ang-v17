import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexPieBarChartComponent } from './apex-pie-bar-chart.component';

describe('ApexPieBarChartComponent', () => {
  let component: ApexPieBarChartComponent;
  let fixture: ComponentFixture<ApexPieBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApexPieBarChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApexPieBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
