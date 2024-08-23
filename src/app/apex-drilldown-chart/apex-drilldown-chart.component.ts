import { Component, ViewChild } from '@angular/core';
import { ChartComponent, NgApexchartsModule } from 'ng-apexcharts';
import { ApexDataService } from '../services/apex-data.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-apex-drilldown-chart',
  standalone: true,
  imports: [NgApexchartsModule, CommonModule],
  templateUrl: './apex-drilldown-chart.component.html',
  styleUrl: './apex-drilldown-chart.component.scss',
  providers: [ApexDataService],
})
export class ApexDrilldownChartComponent {
  @ViewChild('chart') chart!: ChartComponent;
  chartOptions: any;
  originalSeries: any;
  drilldownData: any;
  isDrilldown!: boolean;
  currentDrilldownLabel: string = '';

  constructor(
    private apexDataService: ApexDataService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadChartData();
    this.isDrilldown = false;
    console.log(this.isDrilldown);
  }

  private loadChartData(): void {
    this.apexDataService.getDrillDownChartData().subscribe((data) => {
      this.initializeChart(data);
    });
  }

  private initializeChart(data: any): void {
    console.log('Trying to initialise the chart.');

    this.originalSeries = data.series[0]; // Assuming only one series in the response
    this.drilldownData = data.drilldown.series;

    this.chartOptions = {
      series: this.originalSeries.data.map((item: any) => item.value),
      chart: {
        width: 500,
        type: 'pie',
        events: {
          dataPointSelection: (event: any, chartContext: any, config: any) =>
            this.handleDataPointSelection(config),
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
          dataLabels: {
            offset: 10, // Adjust this value to position labels outside the pie
          },
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

    this.isDrilldown = false;
    this.currentDrilldownLabel = '';
  }

  //   drilldown logic starts

  private handleDataPointSelection(config: any): void {
    if (!this.isDrilldown) {
      console.log('Drilldown was FALSE');
      const selectedId = this.originalSeries.data[config.dataPointIndex].id;
      const selectedDrilldown = this.drilldownData.find(
        (d: any) => d.id === selectedId
      );

      if (selectedDrilldown) {
        this.updateChart(selectedDrilldown);
        this.currentDrilldownLabel =
          this.originalSeries.data[config.dataPointIndex].label;
        this.isDrilldown = true;
        this.cdr.detectChanges(); // Trigger change detection
        console.log('We have set the isDrilldown to = ', this.isDrilldown);
      }
    }
  }

  private updateChart(selectedDrilldown: any): void {
    const series = selectedDrilldown.data.map((item: any) => item.value);
    const labels = selectedDrilldown.data.map((item: any) => item.label);

    // Find the corresponding label for the selected id this way or change the format for the API response
    const originalItem = this.originalSeries.data.find(
      (item: any) => item.id === selectedDrilldown.id
    );
    const titleLabel = originalItem ? originalItem.label : selectedDrilldown.id;

    this.chart.updateSeries(series);

    // Update other chart options with animation settings
    this.chart.updateOptions(
      {
        labels,
        title: {
          text: `Details of ${titleLabel}`,
        },
      },
      true
    ); // The 'true' parameter enables animation for the options update
  }

  goToTeams(): void {
    event!.preventDefault();

    // Reinitialize the chart with the original data
    this.initializeChart({
      series: [this.originalSeries],
      drilldown: { series: this.drilldownData },
    });

    // Reset state variables
    this.isDrilldown = false;
    this.currentDrilldownLabel = '';
    // this.chart.render()
    this.cdr.detectChanges();
  }

  // drilldown logic ends
}
