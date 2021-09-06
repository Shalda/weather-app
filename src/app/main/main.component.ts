import {Component, OnDestroy, OnInit} from '@angular/core';
import {ForecastRepositoryService} from "../services/forecast.repository.service";
import {Subscription} from "rxjs";
import {Forecast, ForecastOneDay} from "../model/forecast";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  private oneDayForecastRepoSubsc: Subscription;
  private fiveDayForecastRepoSubsc: Subscription;
  public forecast: Forecast[] = []
public forecastForFiveDay: ForecastOneDay[] = [];
  constructor(private _forecastRepo: ForecastRepositoryService) {
  }

  ngOnInit(): void {
    this.oneDayForecastRepoSubsc = this._forecastRepo.getOneDayForecastListener().subscribe(data => {
      this.forecast = data;
    })
    this.fiveDayForecastRepoSubsc = this._forecastRepo.getFiveDayForecastListener().subscribe(data => {
      this.forecastForFiveDay = data;
    })
  }
  ngOnDestroy() {
    this.oneDayForecastRepoSubsc.unsubscribe();
  }
}
