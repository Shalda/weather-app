
export interface Headline{
    "Text": string,
    "Category": string,

}
export interface Forecast {
  "Key"?: string,
  "Title"?:string,
  "Text"?:string,
  "Category"?:string,
  "Date": string,
  "EpochDate": number,
  "Temperature": {
    "Minimum": Temperature,
    "Maximum": Temperature
  },
  "Day": {
    "Icon": number,
    "IconPhrase": string,
    "HasPrecipitation": boolean
  },
  "Night": {
    "Icon": number,
    "IconPhrase": string,
    "HasPrecipitation": boolean
    "PrecipitationType"?: string,
    "PrecipitationIntensity"?: string
  },
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

