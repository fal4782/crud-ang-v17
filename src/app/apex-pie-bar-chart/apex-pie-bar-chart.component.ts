import { Component, ViewChild } from '@angular/core';
import { ChartComponent, NgApexchartsModule } from 'ng-apexcharts';
import { ApexDataService } from '../services/apex-data.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-apex-pie-bar-chart',
  standalone: true,
  imports: [NgApexchartsModule, CommonModule],
  templateUrl: './apex-pie-bar-chart.component.html',
  styleUrl: './apex-pie-bar-chart.component.scss',
  providers: [ApexDataService],
})
export class ApexPieBarChartComponent {
  @ViewChild('pieChart') pieChart!: ChartComponent;
  @ViewChild('barChart') barChart!: ChartComponent;
  pieChartOptions: any;
  barChartOptions: any = {};
  originalSeries: any;
  barGraphData: any;

  constructor(
    private apexDataService: ApexDataService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadChartData();
  }

  private loadChartData(): void {
    this.apexDataService.getPieBarChartData().subscribe((data) => {
      this.initializePieChart(data);
    });
  }

  private initializePieChart(data: any): void {
    this.originalSeries = data.series[0];
    this.barGraphData = data.barGraph.series;

    this.pieChartOptions = {
      series: this.originalSeries.data.map((item: any) => item.value),
      chart: {
        width: 500,
        type: 'pie',
        events: {
          dataPointSelection: (event: any, chartContext: any, config: any) =>
            this.populateBarGraph(config),
        },
      },
      theme: {
        monochrome: {
          enabled: false,
        },
      },
      title: {
        text: `Details of ${this.originalSeries.label}`,
      },
      labels: this.originalSeries.data.map((item: any) => item.label),
      plotOptions: {
        pie: {
          expandOnClick: true,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };
  }

  private populateBarGraph(config: any) {
    const selectedId = this.originalSeries.data[config.dataPointIndex]?.id;
    const selectedBarData = this.barGraphData.find(
      (item: any) => item.id === selectedId
    );

    // Dynamically create bar chart options
    this.barChartOptions = {
      series: selectedBarData
        ? [
            {
              name: 'Usage',
              data: selectedBarData.data.map((item: any) => item.value),
            },
          ]
        : [],
      chart: {
        type: 'bar',
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: selectedBarData
          ? selectedBarData.data.map((item: any) => item.label)
          : [],
      },
    };

    // Force change detection to update the bar chart
    this.cdr.detectChanges();
  }
}
