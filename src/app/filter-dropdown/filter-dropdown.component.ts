import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CountriesService } from '../services/countries.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-filter-dropdown',
  standalone: true,
  imports: [DropdownModule, FormsModule],
  templateUrl: './filter-dropdown.component.html',
  styleUrl: './filter-dropdown.component.scss',
  providers: [CountriesService],
})
export class FilterDropdownComponent {
  countries: any[] = [];

  selectedCountry: any;

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countriesService.getCountries().subscribe({
      next: (data) => {
        this.countries = data.slice(0, 50); // Slice the first 50 entries
      },
      error: (error) => {
        console.error('Error fetching countries', error);
        this.countries = []; // Set to an empty array in case of error
      },
    });
  }
}
