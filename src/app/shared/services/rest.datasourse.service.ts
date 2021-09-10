import {Injectable} from '@angular/core';
import {from, Observable, of} from "rxjs";
import {City} from "../../model/city";
import {Forecast, ForecastOneDay, Headline, Temperature} from "../../model/forecast";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RestDataSourceService {
  private myUrlOneDay = 'http://dataservice.accuweather.com/forecasts/v1/daily/'
  private myApiKey = 'E2G1yd3w7IZ9nrMRD08idrwJYIdoXEAQ'
  private myUrlAuto= 'http://dataservice.accuweather.com/locations/v1/cities/autocomplete'

  private cities: City[] = [
    {
      "Version": 1,
      "Key": "308406",
      "Type": "City",
      "Rank": 20,
      "LocalizedName": "Khartoum",
      "Country": {
        "ID": "SD",
        "LocalizedName": "Sudan"
      },
      "AdministrativeArea": {
        "ID": "KH",
        "LocalizedName": "Khartoum"
      }
    },
    {
      "Version": 1,
      "Key": "29075",
      "Type": "City",
      "Rank": 21,
      "LocalizedName": "Khulna",
      "Country": {
        "ID": "BD",
        "LocalizedName": "Bangladesh"
      },
      "AdministrativeArea": {
        "ID": "D",
        "LocalizedName": "Khulna"
      }
    },
    {
      "Version": 1,
      "Key": "323903",
      "Type": "City",
      "Rank": 21,
      "LocalizedName": "Kharkiv",
      "Country": {
        "ID": "UA",
        "LocalizedName": "Ukraine"
      },
      "AdministrativeArea": {
        "ID": "63",
        "LocalizedName": "Kharkiv"
      }
    },
    {
      "Version": 1,
      "Key": "210291",
      "Type": "City",
      "Rank": 31,
      "LocalizedName": "Khorramabad",
      "Country": {
        "ID": "IR",
        "LocalizedName": "Iran"
      },
      "AdministrativeArea": {
        "ID": "20",
        "LocalizedName": "Lorestan"
      }
    },
    {
      "Version": 1,
      "Key": "293149",
      "Type": "City",
      "Rank": 31,
      "LocalizedName": "Khabarovsk",
      "Country": {
        "ID": "RU",
        "LocalizedName": "Russia"
      },
      "AdministrativeArea": {
        "ID": "KHA",
        "LocalizedName": "Khabarovsk"
      }
    },
    {
      "Version": 1,
      "Key": "324056",
      "Type": "City",
      "Rank": 31,
      "LocalizedName": "Kherson",
      "Country": {
        "ID": "UA",
        "LocalizedName": "Ukraine"
      },
      "AdministrativeArea": {
        "ID": "65",
        "LocalizedName": "Kherson"
      }
    },
    {
      "Version": 1,
      "Key": "324159",
      "Type": "City",
      "Rank": 31,
      "LocalizedName": "Khmelnytskyi",
      "Country": {
        "ID": "UA",
        "LocalizedName": "Ukraine"
      },
      "AdministrativeArea": {
        "ID": "68",
        "LocalizedName": "Khmel'nyts'kyy"
      }
    },
    {
      "Version": 1,
      "Key": "296652",
      "Type": "City",
      "Rank": 35,
      "LocalizedName": "Khamis Mushait",
      "Country": {
        "ID": "SA",
        "LocalizedName": "Saudi Arabia"
      },
      "AdministrativeArea": {
        "ID": "14",
        "LocalizedName": "'Asīr"
      }
    },
    {
      "Version": 1,
      "Key": "319899",
      "Type": "City",
      "Rank": 35,
      "LocalizedName": "Khlong Luang",
      "Country": {
        "ID": "TH",
        "LocalizedName": "Thailand"
      },
      "AdministrativeArea": {
        "ID": "13",
        "LocalizedName": "Pathum Thani"
      }
    },
    {
      "Version": 1,
      "Key": "1147085",
      "Type": "City",
      "Rank": 35,
      "LocalizedName": "Khayelitsha",
      "Country": {
        "ID": "ZA",
        "LocalizedName": "South Africa"
      },
      "AdministrativeArea": {
        "ID": "WC",
        "LocalizedName": "Western Cape"
      }
    },
    {
      "Version": 1,
      "Key": "113487",
      "Type": "City",
      "Rank": 10,
      "LocalizedName": "Kinshasa",
      "Country": {
        "ID": "CD",
        "LocalizedName": "Democratic Republic of the Congo"
      },
      "AdministrativeArea": {
        "ID": "KN",
        "LocalizedName": "Kinshasa"
      }
    },
    {
      "Version": 1,
      "Key": "106812",
      "Type": "City",
      "Rank": 11,
      "LocalizedName": "Kunming",
      "Country": {
        "ID": "CN",
        "LocalizedName": "China"
      },
      "AdministrativeArea": {
        "ID": "YN",
        "LocalizedName": "Yunnan"
      }
    },
    {
      "Version": 1,
      "Key": "206690",
      "Type": "City",
      "Rank": 11,
      "LocalizedName": "Kolkata",
      "Country": {
        "ID": "IN",
        "LocalizedName": "India"
      },
      "AdministrativeArea": {
        "ID": "WB",
        "LocalizedName": "West Bengal"
      }
    },
    {
      "Version": 1,
      "Key": "261158",
      "Type": "City",
      "Rank": 11,
      "LocalizedName": "Karachi",
      "Country": {
        "ID": "PK",
        "LocalizedName": "Pakistan"
      },
      "AdministrativeArea": {
        "ID": "SD",
        "LocalizedName": "Sindh"
      }
    },
    {
      "Version": 1,
      "Key": "102677",
      "Type": "City",
      "Rank": 15,
      "LocalizedName": "Kaifeng",
      "Country": {
        "ID": "CN",
        "LocalizedName": "China"
      },
      "AdministrativeArea": {
        "ID": "HA",
        "LocalizedName": "Henan"
      }
    },
    {
      "Version": 1,
      "Key": "2580069",
      "Type": "City",
      "Rank": 15,
      "LocalizedName": "Kashgar Prefecture",
      "Country": {
        "ID": "CN",
        "LocalizedName": "China"
      },
      "AdministrativeArea": {
        "ID": "XJ",
        "LocalizedName": "Xinjiang"
      }
    },
    {
      "Version": 1,
      "Key": "4361",
      "Type": "City",
      "Rank": 20,
      "LocalizedName": "Kabul",
      "Country": {
        "ID": "AF",
        "LocalizedName": "Afghanistan"
      },
      "AdministrativeArea": {
        "ID": "KAB",
        "LocalizedName": "Kabul"
      }
    },
    {
      "Version": 1,
      "Key": "233776",
      "Type": "City",
      "Rank": 20,
      "LocalizedName": "Kuala Lumpur",
      "Country": {
        "ID": "MY",
        "LocalizedName": "Malaysia"
      },
      "AdministrativeArea": {
        "ID": "14",
        "LocalizedName": "Kuala Lumpur"
      }
    },
    {
      "Version": 1,
      "Key": "308406",
      "Type": "City",
      "Rank": 20,
      "LocalizedName": "Khartoum",
      "Country": {
        "ID": "SD",
        "LocalizedName": "Sudan"
      },
      "AdministrativeArea": {
        "ID": "KH",
        "LocalizedName": "Khartoum"
      }
    },
    {
      "Version": 1,
      "Key": "318416",
      "Type": "City",
      "Rank": 20,
      "LocalizedName": "Kampala",
      "Country": {
        "ID": "UG",
        "LocalizedName": "Uganda"
      },
      "AdministrativeArea": {
        "ID": "102",
        "LocalizedName": "Kampala"
      }
    }
  ]
  private cityForecast: { Headline: Headline, "DailyForecasts": Forecast[]} = {
    Headline: {
      "Text": "A thunderstorm Saturday evening",
      "Category": "thunderstorm",
    },
    DailyForecasts:[
      {
    "Date": "2021-09-08T07:00:00+04:30",
    "EpochDate": 1631068200,
    "Temperature": {
      "Minimum": {
        "Value": 59,
        "Unit": "F",
        "UnitType": 18
      },
      "Maximum": {
        "Value": 102,
        "Unit": "F",
        "UnitType": 18
      }
    },
    "Day": {
      "Icon": 30,
      "IconPhrase": "Hot",
      "HasPrecipitation": false
    },
    "Night": {
      "Icon": 33,
      "IconPhrase": "Clear",
      "HasPrecipitation": false
    },
  }]}
  private cityFiveDayForecast: { Headline: Headline, "DailyForecasts": Forecast[]}= {
    "Headline": {
      "Text": "A thunderstorm Saturday evening",
      "Category": "thunderstorm",
    },
    "DailyForecasts": [
      {
        "Date": "2021-09-09T07:00:00+04:30",
        "EpochDate": 1631154600,
        "Temperature": {
          "Minimum": {
            "Value": 14.9,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 31.1,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "Day": {
          "Icon": 1,
          "IconPhrase": "Sunny",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 33,
          "IconPhrase": "Clear",
          "HasPrecipitation": false
        },
      },
      {
        "Date": "2021-09-10T07:00:00+04:30",
        "EpochDate": 1631241000,
        "Temperature": {
          "Minimum": {
            "Value": 13.6,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 30.4,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "Day": {
          "Icon": 1,
          "IconPhrase": "Sunny",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 34,
          "IconPhrase": "Mostly clear",
          "HasPrecipitation": false
        },
      },
      {
        "Date": "2021-09-11T07:00:00+04:30",
        "EpochDate": 1631327400,
        "Temperature": {
          "Minimum": {
            "Value": 15.6,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 29.3,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "Day": {
          "Icon": 1,
          "IconPhrase": "Sunny",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 35,
          "IconPhrase": "Partly cloudy",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Light"
        },
      },
      {
        "Date": "2021-09-12T07:00:00+04:30",
        "EpochDate": 1631413800,
        "Temperature": {
          "Minimum": {
            "Value": 13.4,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 29.7,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "Day": {
          "Icon": 1,
          "IconPhrase": "Sunny",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 34,
          "IconPhrase": "Mostly clear",
          "HasPrecipitation": false
        },
      },
      {
        "Date": "2021-09-13T07:00:00+04:30",
        "EpochDate": 1631500200,
        "Temperature": {
          "Minimum": {
            "Value": 12.4,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 30.1,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "Day": {
          "Icon": 1,
          "IconPhrase": "Sunny",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 33,
          "IconPhrase": "Clear",
          "HasPrecipitation": false
        },
      }
    ]
  }

  constructor(private _http: HttpClient) {
  }
  getCitiesAutocomplete(key: string): Observable<City[]> {
   // return this._http.get<City[]>(`${this.myUrlAuto}?apikey=${this.myApiKey}&q=${key}`)
   return of(this.cities);
  }

  getCityForecast(key: string): Observable<{ Headline: Headline, "DailyForecasts": Forecast[]}> {
  // return this._http.get<{ Headline: Headline, "DailyForecasts": Forecast[]}>(`${this.myUrlOneDay}1day/${key}?apikey=${this.myApiKey}&metric=true`)
   return of(this.cityForecast)
  }

  getFiveDayForecast(key: string): Observable<{ Headline: Headline, "DailyForecasts": Forecast[]}> {
  // return this._http.get<{ Headline: Headline, "DailyForecasts": Forecast[]}>(`${this.myUrlOneDay}5day/${key}?apikey=${this.myApiKey}&metric=true`)
    return of (this.cityFiveDayForecast)
  }
}
