import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexDrilldownChartComponent } from './apex-drilldown-chart.component';

describe('ApexChartsComponent', () => {
  let component: ApexDrilldownChartComponent;
  let fixture: ComponentFixture<ApexDrilldownChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApexDrilldownChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ApexDrilldownChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
