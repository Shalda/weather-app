import {Injectable} from '@angular/core';
import {RestDataSourceService} from "./rest.datasourse.service";
import {Subject} from "rxjs";
import {Forecast, ForecastOneDay, Headline} from "../../model/forecast";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ForecastRepositoryService {
  private oneDayForecast: Subject<Forecast> = new Subject<Forecast>()
  private fiveDayForecast: Subject<Forecast[]> = new Subject<Forecast[]>()

  constructor(private _restService: RestDataSourceService) {
  }

  public getOneDayForecastListener() {
    return this.oneDayForecast.asObservable();
  }

  public getFiveDayForecastListener() {
    return this.fiveDayForecast.asObservable();
  }

  public getForecast(key: string, name: string) {
    this._restService.getCityForecast(key).pipe(
      map((data: { Headline: Headline, "DailyForecasts": Forecast[] }) => {
        let dayForecast = data.DailyForecasts[0];
        dayForecast['Key'] = key;
        dayForecast['Title'] = name;
        dayForecast['Text'] = data.Headline['Text'];
        dayForecast['Category'] = data.Headline['Category'];
        return dayForecast;
        }
      ))
      .subscribe((dayForecast) => {
        this.oneDayForecast.next(dayForecast)
      }, error => console.log(error))

    this._restService.getFiveDayForecast(key).subscribe(data => {
      let fiveDayForecast = [...data.DailyForecasts];
      this.fiveDayForecast.next(fiveDayForecast)
    }, error => console.log(error))
  }
}
