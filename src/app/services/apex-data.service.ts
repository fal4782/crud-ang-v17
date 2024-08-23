import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApexDataService {
  private apiUrl = 'http://localhost:3000/api/data';

  constructor(private http: HttpClient) {}

  // Actual API call (in case you have the data coming from a backend)
  getChartData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Mock API calls to run frontend standalone
  getDrillDownChartData(): Observable<any> {
    const data = {
      series: [
        {
          label: 'Browsers',
          data: [
            {
              label: 'Chrome',
              value: 61.04,
              id: 1,
            },
            {
              label: 'Safari',
              value: 9.47,
              id: 2,
            },
            {
              label: 'Edge',
              value: 9.32,
              id: 3,
            },
            {
              label: 'Firefox',
              value: 8.15,
              id: 4,
            },
            {
              label: 'Other',
              value: 11.02,
              id: 5,
            },
          ],
        },
      ],
      drilldown: {
        series: [
          {
            id: 1,
            data: [
              {
                label: 'v97.0',
                value: 36.89,
              },
              {
                label: 'v96.0',
                value: 18.16,
              },
              {
                label: 'v95.0',
                value: 0.54,
              },
              {
                label: 'v94.0',
                value: 0.7,
              },
              {
                label: 'v93.0',
                value: 0.8,
              },
              {
                label: 'v92.0',
                value: 0.41,
              },
              {
                label: 'v91.0',
                value: 0.31,
              },
              {
                label: 'v90.0',
                value: 0.13,
              },
              {
                label: 'v89.0',
                value: 0.14,
              },
              {
                label: 'v88.0',
                value: 0.1,
              },
              {
                label: 'v87.0',
                value: 0.35,
              },
              {
                label: 'v86.0',
                value: 0.17,
              },
              {
                label: 'v85.0',
                value: 0.18,
              },
              {
                label: 'v84.0',
                value: 0.17,
              },
              {
                label: 'v83.0',
                value: 0.21,
              },
              {
                label: 'v81.0',
                value: 0.1,
              },
              {
                label: 'v80.0',
                value: 0.16,
              },
              {
                label: 'v79.0',
                value: 0.43,
              },
              {
                label: 'v78.0',
                value: 0.11,
              },
              {
                label: 'v76.0',
                value: 0.16,
              },
              {
                label: 'v75.0',
                value: 0.15,
              },
              {
                label: 'v72.0',
                value: 0.14,
              },
              {
                label: 'v70.0',
                value: 0.11,
              },
              {
                label: 'v69.0',
                value: 0.13,
              },
              {
                label: 'v56.0',
                value: 0.12,
              },
              {
                label: 'v49.0',
                value: 0.17,
              },
            ],
          },
          {
            id: 2,
            data: [
              {
                label: 'v15.3',
                value: 0.1,
              },
              {
                label: 'v15.2',
                value: 2.01,
              },
              {
                label: 'v15.1',
                value: 2.29,
              },
            ],
          },
          {
            id: 3,
            data: [
              {
                label: 'v97',
                value: 6.62,
              },
              {
                label: 'v96',
                value: 2.55,
              },
              {
                label: 'v95',
                value: 0.15,
              },
            ],
          },
          {
            id: 4,
            data: [
              {
                label: 'v96.0',
                value: 4.17,
              },
              {
                label: 'v95.0',
                value: 3.33,
              },
              {
                label: 'v94.0',
                value: 0.11,
              },
            ],
          },
        ],
      },
    };
    return of(data);
  }
  getPieBarChartData(): Observable<any> {
    const data = {
      series: [
        {
          label: 'Browsers',
          data: [
            {
              label: 'Chrome',
              value: 61.04,
              id: 1,
            },
            {
              label: 'Safari',
              value: 9.47,
              id: 2,
            },
            {
              label: 'Edge',
              value: 9.32,
              id: 3,
            },
            {
              label: 'Firefox',
              value: 8.15,
              id: 4,
            },
            {
              label: 'Other',
              value: 11.02,
              id: 5,
            },
          ],
        },
      ],
      barGraph: {
        series: [
          {
            id: 1,
            data: [
              {
                label: 'v97.0',
                value: 36.89,
              },
              {
                label: 'v96.0',
                value: 18.16,
              },
              {
                label: 'v95.0',
                value: 0.54,
              },
              {
                label: 'v94.0',
                value: 0.7,
              },
              {
                label: 'v93.0',
                value: 0.8,
              },
              {
                label: 'v92.0',
                value: 0.41,
              },
              {
                label: 'v91.0',
                value: 0.31,
              },
              {
                label: 'v90.0',
                value: 0.13,
              },
              {
                label: 'v89.0',
                value: 0.14,
              },
              {
                label: 'v88.0',
                value: 0.1,
              },
              {
                label: 'v87.0',
                value: 0.35,
              },
              {
                label: 'v86.0',
                value: 0.17,
              },
              {
                label: 'v85.0',
                value: 0.18,
              },
              {
                label: 'v84.0',
                value: 0.17,
              },
              {
                label: 'v83.0',
                value: 0.21,
              },
              {
                label: 'v81.0',
                value: 0.1,
              },
              {
                label: 'v80.0',
                value: 0.16,
              },
              {
                label: 'v79.0',
                value: 0.43,
              },
              {
                label: 'v78.0',
                value: 0.11,
              },
              {
                label: 'v76.0',
                value: 0.16,
              },
              {
                label: 'v75.0',
                value: 0.15,
              },
              {
                label: 'v72.0',
                value: 0.14,
              },
              {
                label: 'v70.0',
                value: 0.11,
              },
              {
                label: 'v69.0',
                value: 0.13,
              },
              {
                label: 'v56.0',
                value: 0.12,
              },
              {
                label: 'v49.0',
                value: 0.17,
              },
            ],
          },
          {
            id: 2,
            data: [
              {
                label: 'v15.3',
                value: 0.1,
              },
              {
                label: 'v15.2',
                value: 2.01,
              },
              {
                label: 'v15.1',
                value: 2.29,
              },
            ],
          },
          {
            id: 3,
            data: [
              {
                label: 'v97',
                value: 6.62,
              },
              {
                label: 'v96',
                value: 2.55,
              },
              {
                label: 'v95',
                value: 0.15,
              },
            ],
          },
          {
            id: 4,
            data: [
              {
                label: 'v96.0',
                value: 4.17,
              },
              {
                label: 'v95.0',
                value: 3.33,
              },
              {
                label: 'v94.0',
                value: 0.11,
              },
            ],
          },
        ],
      },
    };
    return of(data);
  }
}
