export interface Forecast {
  "Title"? : string,
  "LocalObservationDateTime": string,
  "EpochTime": number,
  "WeatherText": string,
  "WeatherIcon": number,
  "HasPrecipitation": boolean,
  "PrecipitationType": any,
  "IsDayTime": boolean,
  "Temperature": unitModel,
  "RealFeelTemperature": unitModel,
  "RealFeelTemperatureShade": unitModel,
  "RelativeHumidity": number,
  "IndoorRelativeHumidity": number,
  "DewPoint": unitModel,
  "Wind": {
    "Direction": {
      "Degrees": number,
      "Localized": string,
      "English": string
    },
    "Speed": unitModel,
  }
  "WindGust": {
    "Speed": unitModel,
  }
  "UVIndex": number,
  "UVIndexText": string,
  "Visibility": unitModel,
  "ObstructionsToVisibility": string,
  "CloudCover": number,
  "Ceiling": unitModel,
  "Pressure": unitModel,
  "PressureTendency": {
    "LocalizedText": string,
    "Code": string
  },
  "Past24HourTemperatureDeparture": unitModel,
  "ApparentTemperature": unitModel,
  "WindChillTemperature": unitModel,
  "WetBulbTemperature": unitModel,
  "Precip1hr": unitModel,
  "PrecipitationSummary": {
    "Precipitation": unitModel
    "PastHour": unitModel,
    "Past3Hours": unitModel,
    "Past6Hours": unitModel,
    "Past9Hours": unitModel,
    "Past12Hours": unitModel,
    "Past18Hours": unitModel,
    "Past24Hours": unitModel
  },
  "TemperatureSummary": {
    "Past6HourRange": {
      "Minimum":unitModel,
      "Maximum":unitModel
    },
    "Past12HourRange": {
        "Minimum": unitModel,
        "Maximum": unitModel
      },
    "Past24HourRange": {
        "Minimum": unitModel,
        "Maximum": unitModel
      }
  },
  "MobileLink": string,
  "Link": string
}
export interface ForecastOneDay  {
  "Date": string,
  "EpochDate": number,
  "Temperature": {
    "Minimum": Temperature,
    "Maximum": Temperature
  },
  "Day": Time,
  "Night": Time,
  "Sources": string[],
  "MobileLink": string,
  "Link": string
}
export interface Temperature {
  "Value": number,
  "Unit": string,
  "UnitType": number
}
export interface Time {
  "Icon": number,
  "IconPhrase": string,
  "HasPrecipitation": boolean
}
export interface unitModel {
  "Metric": {
    "Value": number,
    "Unit": string,
    "UnitType": number
  },
  "Imperial": {
    "Value": number,
    "Unit": string,
    "UnitType": number
  }
}

