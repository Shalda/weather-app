import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Forecast, ForecastOneDay} from "../../model/forecast";
import {ForecastRepositoryService} from "../../shared/services/forecast.repository.service";
import {FavoritesService} from "../shared/favorites.service";

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss']
})
export class WeatherListComponent implements OnInit, OnDestroy {
  private oneDayForecastRepoSubsc: Subscription;
  private fiveDayForecastRepoSubsc: Subscription;
  public forecast: Forecast
  public forecastForFiveDay: Forecast[] = [];
  public isFavorite: boolean = false

  constructor(private _forecastRepo: ForecastRepositoryService, private _favCityService: FavoritesService) {
  }

  ngOnInit(): void {
    this.oneDayForecastRepoSubsc = this._forecastRepo.getOneDayForecastListener().subscribe(data => {
      this.forecast = data;
    })
    this.fiveDayForecastRepoSubsc = this._forecastRepo.getFiveDayForecastListener().subscribe(data => {
      this.forecastForFiveDay = data;
    })
    this._forecastRepo.getForecast('323903', 'Kharkiv')
    this.isFavorite = this._favCityService.isFavorite(this.forecast.Key || '323903')
  }

  public toFavorites(val: boolean) {
    if (val) {
      this.isFavorite = !this.isFavorite
      this._favCityService.removeFromFavorite(this.forecast.Key || '3239)
    }
  }

  ngOnDestroy() {
    this.oneDayForecastRepoSubsc.unsubscribe();
  }
}
