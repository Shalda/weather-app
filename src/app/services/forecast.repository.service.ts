import {Injectable} from '@angular/core';
import {RestDataSourceService} from "./rest.datasourse.service";
import {Subject} from "rxjs";
import {Forecast, ForecastOneDay} from "../model/forecast";

@Injectable({
  providedIn: 'root'
})
export class ForecastRepositoryService {
  private oneDayForecast: Subject<Forecast[]> = new Subject<Forecast[]>()
  private fiveDayForecast: Subject<ForecastOneDay[]> = new Subject<ForecastOneDay[]>()

  constructor(private _restService: RestDataSourceService) {}

  public getOneDayForecastListener() {
    return this.oneDayForecast.asObservable();
  }
  public getFiveDayForecastListener() {
    return this.fiveDayForecast.asObservable();
  }

  public getForecast(key: string, name: string) {
    this._restService.getCityForecast(key).subscribe(data => {
      data[0].Title = name;
      this.oneDayForecast.next([...data])
    }, error => console.log(error))

    this._restService.getFiveDayForecast(key).subscribe(data => {
      this.fiveDayForecast.next([...data])
    }, error => console.log(error))
  }
}
