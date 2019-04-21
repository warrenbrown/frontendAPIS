import { Injectable } from '@angular/core';
import { Stadium } from './stadium';

@Injectable({
  providedIn: 'root'
})
export class StadiumsService {
  private stadiums: Stadium[] = [
    { "name": "All American Park", "rarity": "bronze", "team": "Free Agents" },
    { "name": "Angel Stadium of Anaheim\u0026trade;", "rarity": "silver", "team": "Angels" },
    { "name": "Barnes Canyon Ballpark", "rarity": "bronze", "team": "Free Agents" },
    { "name": "Bayfront Park", "rarity": "bronze", "team": "Free Agents" },
    { "name": "Blue River Stadium", "rarity": "bronze", "team": "Free Agents" },
    { "name": "Busch Stadium\u0026trade;", "rarity": "silver", "team": "Cardinals" },
    { "name": "Capitol Field", "rarity": "bronze", "team": "Free Agents" },
    { "name": "Center City Field", "rarity": "bronze", "team": "Free Agents" },
    { "name": "Chase Field\u0026trade;", "rarity": "silver", "team": "Diamondbacks" },
    { "name": "CITI FIELD\u0026trade;", "rarity": "silver", "team": "Mets" },
    { "name": "Citizens Bank Park\u0026trade;", "rarity": "silver", "team": "Phillies" },
    { "name": "Comerica Park\u0026trade;", "rarity": "silver", "team": "Tigers" },
    { "name": "Coors Field\u0026trade;", "rarity": "silver", "team": "Rockies" },
    { "name": "Crosley Field", "rarity": "diamond", "team": "Free Agents" },
    { "name": "Crystal Falls Stadium", "rarity": "bronze", "team": "Free Agents" },
    { "name": "Dodger Stadium\u0026trade;", "rarity": "silver", "team": "Dodgers" },
    { "name": "Fenway Park\u0026trade;", "rarity": "silver", "team": "Red Sox" },
    { "name": "Forbes Field", "rarity": "diamond", "team": "Free Agents" },
    { "name": "Franco Park", "rarity": "bronze", "team": "Free Agents" },
    { "name": "Globe Life Park in Arlington\u0026trade;", "rarity": "silver", "team": "Rangers" },
    { "name": "Great American Ball Park\u0026trade;", "rarity": "silver", "team": "Reds" },
    { "name": "Green Valley Stadium", "rarity": "bronze", "team": "Free Agents" },
    { "name": "Griffith Stadium", "rarity": "diamond", "team": "Free Agents" },
    { "name": "Guaranteed Rate Field\u0026trade;", "rarity": "silver", "team": "White Sox" },
    { "name": "Highland Park", "rarity": "bronze", "team": "Free Agents" }
  ];

  constructor() { }

  all() {
    return this.stadiums;
  }
}
