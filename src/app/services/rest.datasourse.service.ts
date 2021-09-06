import {Injectable} from '@angular/core';
import {from, Observable, of} from "rxjs";
import {City} from "../model/city";
import {Forecast, ForecastOneDay} from "../model/forecast";

@Injectable({
  providedIn: 'root'
})
export class RestDataSourceService {
  private citiesKh: City[] = [
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
    }
  ]
  private citiesK: City[] = [
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
  private cityForecast: Forecast[] = [
    {
      "LocalObservationDateTime": "2021-09-06T13:50:00+04:30",
      "EpochTime": 1630920000,
      "WeatherText": "Sunny",
      "WeatherIcon": 1,
      "HasPrecipitation": false,
      "PrecipitationType": null,
      "IsDayTime": true,
      "Temperature": {
        "Metric": {
          "Value": 35.6,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 96,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "RealFeelTemperature": {
        "Metric": {
          "Value": 37.8,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 100,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "RealFeelTemperatureShade": {
        "Metric": {
          "Value": 34.3,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 94,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "RelativeHumidity": 12,
      "IndoorRelativeHumidity": 12,
      "DewPoint": {
        "Metric": {
          "Value": 2.3,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 36,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Wind": {
        "Direction": {
          "Degrees": 68,
          "Localized": "ENE",
          "English": "ENE"
        },
        "Speed": {
          "Metric": {
            "Value": 9.4,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Imperial": {
            "Value": 5.8,
            "Unit": "mi/h",
            "UnitType": 9
          }
        }
      },
      "WindGust": {
        "Speed": {
          "Metric": {
            "Value": 12.6,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Imperial": {
            "Value": 7.8,
            "Unit": "mi/h",
            "UnitType": 9
          }
        }
      },
      "UVIndex": 5,
      "UVIndexText": "Moderate",
      "Visibility": {
        "Metric": {
          "Value": 16.1,
          "Unit": "km",
          "UnitType": 6
        },
        "Imperial": {
          "Value": 10,
          "Unit": "mi",
          "UnitType": 2
        }
      },
      "ObstructionsToVisibility": "",
      "CloudCover": 0,
      "Ceiling": {
        "Metric": {
          "Value": 12192,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 40000,
          "Unit": "ft",
          "UnitType": 0
        }
      },
      "Pressure": {
        "Metric": {
          "Value": 1011.2,
          "Unit": "mb",
          "UnitType": 14
        },
        "Imperial": {
          "Value": 29.86,
          "Unit": "inHg",
          "UnitType": 12
        }
      },
      "PressureTendency": {
        "LocalizedText": "Falling",
        "Code": "F"
      },
      "Past24HourTemperatureDeparture": {
        "Metric": {
          "Value": -2.7,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": -5,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "ApparentTemperature": {
        "Metric": {
          "Value": 32.2,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 90,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "WindChillTemperature": {
        "Metric": {
          "Value": 35.6,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 96,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "WetBulbTemperature": {
        "Metric": {
          "Value": 16.6,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 62,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Precip1hr": {
        "Metric": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Imperial": {
          "Value": 0,
          "Unit": "in",
          "UnitType": 1
        }
      },
      "PrecipitationSummary": {
        "Precipitation": {
          "Metric": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Imperial": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          }
        },
        "PastHour": {
          "Metric": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Imperial": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          }
        },
        "Past3Hours": {
          "Metric": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Imperial": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          }
        },
        "Past6Hours": {
          "Metric": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Imperial": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          }
        },
        "Past9Hours": {
          "Metric": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Imperial": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          }
        },
        "Past12Hours": {
          "Metric": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Imperial": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          }
        },
        "Past18Hours": {
          "Metric": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Imperial": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          }
        },
        "Past24Hours": {
          "Metric": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Imperial": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          }
        }
      },
      "TemperatureSummary": {
        "Past6HourRange": {
          "Minimum": {
            "Metric": {
              "Value": 20.8,
              "Unit": "C",
              "UnitType": 17
            },
            "Imperial": {
              "Value": 70,
              "Unit": "F",
              "UnitType": 18
            }
          },
          "Maximum": {
            "Metric": {
              "Value": 35.6,
              "Unit": "C",
              "UnitType": 17
            },
            "Imperial": {
              "Value": 96,
              "Unit": "F",
              "UnitType": 18
            }
          }
        },
        "Past12HourRange": {
          "Minimum": {
            "Metric": {
              "Value": 14.5,
              "Unit": "C",
              "UnitType": 17
            },
            "Imperial": {
              "Value": 58,
              "Unit": "F",
              "UnitType": 18
            }
          },
          "Maximum": {
            "Metric": {
              "Value": 35.6,
              "Unit": "C",
              "UnitType": 17
            },
            "Imperial": {
              "Value": 96,
              "Unit": "F",
              "UnitType": 18
            }
          }
        },
        "Past24HourRange": {
          "Minimum": {
            "Metric": {
              "Value": 14.5,
              "Unit": "C",
              "UnitType": 17
            },
            "Imperial": {
              "Value": 58,
              "Unit": "F",
              "UnitType": 18
            }
          },
          "Maximum": {
            "Metric": {
              "Value": 38.4,
              "Unit": "C",
              "UnitType": 17
            },
            "Imperial": {
              "Value": 101,
              "Unit": "F",
              "UnitType": 18
            }
          }
        }
      },
      "MobileLink": "http://www.accuweather.com/en/af/kabul/4361/current-weather/4361?lang=en-us",
      "Link": "http://www.accuweather.com/en/af/kabul/4361/current-weather/4361?lang=en-us"
    }
  ]
  //Todo pull 5 day forecast form "DailyForecasts"
  private cityFiveDayForecast: ForecastOneDay[] = [
    {
      "Date": "2021-09-06T07:00:00+04:30",
      "EpochDate": 1630895400,
      "Temperature": {
        "Minimum": {
          "Value": 62,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 99,
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
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://www.accuweather.com/en/af/kabul/4361/daily-weather-forecast/4361?day=1&lang=en-us",
      "Link": "http://www.accuweather.com/en/af/kabul/4361/daily-weather-forecast/4361?day=1&lang=en-us"
    },
    {
      "Date": "2021-09-07T07:00:00+04:30",
      "EpochDate": 1630981800,
      "Temperature": {
        "Minimum": {
          "Value": 62,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 93,
          "Unit": "F",
          "UnitType": 18
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
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://www.accuweather.com/en/af/kabul/4361/daily-weather-forecast/4361?day=2&lang=en-us",
      "Link": "http://www.accuweather.com/en/af/kabul/4361/daily-weather-forecast/4361?day=2&lang=en-us"
    },
    {
      "Date": "2021-09-08T07:00:00+04:30",
      "EpochDate": 1631068200,
      "Temperature": {
        "Minimum": {
          "Value": 60,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 92,
          "Unit": "F",
          "UnitType": 18
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
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://www.accuweather.com/en/af/kabul/4361/daily-weather-forecast/4361?day=3&lang=en-us",
      "Link": "http://www.accuweather.com/en/af/kabul/4361/daily-weather-forecast/4361?day=3&lang=en-us"
    },
    {
      "Date": "2021-09-09T07:00:00+04:30",
      "EpochDate": 1631154600,
      "Temperature": {
        "Minimum": {
          "Value": 58,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 91,
          "Unit": "F",
          "UnitType": 18
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
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://www.accuweather.com/en/af/kabul/4361/daily-weather-forecast/4361?day=4&lang=en-us",
      "Link": "http://www.accuweather.com/en/af/kabul/4361/daily-weather-forecast/4361?day=4&lang=en-us"
    },
    {
      "Date": "2021-09-10T07:00:00+04:30",
      "EpochDate": 1631241000,
      "Temperature": {
        "Minimum": {
          "Value": 55,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 88,
          "Unit": "F",
          "UnitType": 18
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
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://www.accuweather.com/en/af/kabul/4361/daily-weather-forecast/4361?day=5&lang=en-us",
      "Link": "http://www.accuweather.com/en/af/kabul/4361/daily-weather-forecast/4361?day=5&lang=en-us"
    }
  ]


  constructor() {
  }

  getCitiesAutocomplete(key: string): Observable<City[]> {
    if (key === 'k') return of(this.citiesK);
    return of(this.citiesKh);
  }

  getCityForecast(key: string): Observable<Forecast[]> {
    return of(this.cityForecast)
  }
  getFiveDayForecast(key:string): Observable<ForecastOneDay[]> {
    return of (this.cityFiveDayForecast)
  }
}
