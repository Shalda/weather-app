import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";
import {map, startWith} from "rxjs/operators";
import {City} from "../../model/city";
import {RestDataSourceService} from "../../services/rest.datasourse.service";
import {ForecastRepositoryService} from "../../services/forecast.repository.service";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  myControl = new FormControl();
  options: City[] = [];
  filteredOptions: Observable<City[]>;

  constructor(private _forecastRepo: ForecastRepositoryService, private _restService: RestDataSourceService) {
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.LocalizedName),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }

  public displayFn(city: City): string {
    return city && city.LocalizedName ? city.LocalizedName : '';
  }

  private _filter(name: string): City[] {
    const filterValue = name.toLowerCase();
    this._restService.getCitiesAutocomplete(name).subscribe(data => {
      this.options = data
    })
    return this.options.filter(option => option.LocalizedName.toLowerCase().includes(filterValue));
  }

  public handleSubmit() {
    if (!this.myControl.value) return;
    if (!this.myControl.value.Key && this.options.length > 0) {
      const city = this.options.find(city => city.LocalizedName === this.myControl.value.trim());
      if (!city) return
      this._forecastRepo.getForecast(city['Key'], city['LocalizedName'])
      return
    } else {
      this._forecastRepo.getForecast(this.myControl.value.Key, this.myControl.value.LocalizedName)
    }
  }
}
