import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Observable, of} from "rxjs";
import {debounceTime, distinctUntilChanged, map, startWith, switchMap, tap} from "rxjs/operators";
import {City} from "../../model/city";
import {RestDataSourceService} from "../../shared/services/rest.datasourse.service";
import {ForecastRepositoryService} from "../../shared/services/forecast.repository.service";
import {incorrectCityNameValidator} from "../../shared/directives/inCorrectCityName.directive"

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  searchForm = new FormControl('', incorrectCityNameValidator(/^$|^[A-Za-z ,]+$/));
  cities: City[] = [];
  filteredCities: Observable<City[]>;
  formIsPending: boolean = false;

  constructor(private _forecastRepo: ForecastRepositoryService, private _restService: RestDataSourceService) {
  }

  ngOnInit() {
    this.filteredCities = this.searchForm.valueChanges
      .pipe(
        startWith(''),
        debounceTime(400),
        distinctUntilChanged(),
        switchMap(val => {
          return this._filter(val || '')
        }));
  }

  public displayFn(city: City): string {
    return city && city.LocalizedName ? city.LocalizedName : '';
  }

  private _filter(name: string): Observable<City[]> {
    if (!name) return of(this.cities)
    return this._restService.getCitiesAutocomplete(name)
      .pipe(
        map(response =>
          response.filter(city => {
            return city.LocalizedName.toLowerCase().indexOf(name.toLowerCase()) === 0
          })),
        tap(response => {
          this.cities = response
        })
      )
  }

  public handleSubmit() {
    if (!this.searchForm.value) {
      return
    }

    this.formIsPending = true
    if (!this.searchForm.value.Key && this.cities.length > 0) {
      this._findCityByTypedName()
    } else {
      this._forecastRepo.getForecast(this.searchForm.value.Key, this.searchForm.value.LocalizedName)
    }
    this.cities = []
    this.searchForm.reset()
    this.formIsPending = false
  }

  private _findCityByTypedName() {
    const city = this.cities.find(city => city.LocalizedName.toLowerCase() === this.searchForm.value.toLowerCase().trim())
    if (!city) return
    this._forecastRepo.getForecast(city['Key'], city['LocalizedName'])
  }

}
