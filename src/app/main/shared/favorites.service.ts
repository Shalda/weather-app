import {Injectable} from '@angular/core';
import {City} from "../../model/city";

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favoritesPlaces: City[] = [
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
  ]

  constructor() {
  }

  public addToFavorite(key: string) {
    if(!key){
      return
    }
    this.favoritesPlaces.push();
  }

  public removeFromFavorite(key: string) {
    if(!key){
      return
    }
    this.favoritesPlaces.filter(place => place.Key !== key)
  }

  public getFavorites(key:string) {
    if(!key){
      return
    }
    return [...this.favoritesPlaces]
  }

  public isFavorite(key: string) {
    return this.favoritesPlaces.some(place => place.Key === key)
  }
}
