# Angular2 Service for Star Wars API
# ATTENTION! Service & Documentation still in progress

It uses [Star Wars API](https://swapi.co/) by Paul Hallet

## Dependencies
- @angular/core
- @angular/http
- rxjs/Observable
- http-server

## Installation
- run `npm install ng2-swapi`

## Using
1.  Import SwapiService Component
```
    import { SwapiService } from './ng2-swapi';
```
2. Add it in the provider array of the component
```
    @Component({
        selector: 'my-custom-selector',
        templateUrl: 'my-componet-template.component.html',
        providers: [ SwapiService ]
    })
```
3. Add an argument of type `SwapiService` to the constructor
```
    constructor (private swapi: SwapiService) {}
```
4. Call the desired method [(other available methods)](#method-available)
```
// Example of using
// Correspond to http://swapi.co/api/people/3/

    this.swapi.getPerson(3).subscribe(res =>  {},err =>  {});
```
```
//Response
res = {
	"name": "R2-D2",
	"height": "96",
	"mass": "32",
	"hair_color": "n/a",
	"skin_color": "white, blue",
	"eye_color": "red",
	"birth_year": "33BBY",
  ...
```

## Methods available
### Get Root
```
SwapiService.getRoot(wookiee: boolean)
.subscribe(
  res =>  {},
  err =>  {});
```
Attributes:
- `wookiee` boolean (default: false) - wookiee translations

### Get People / Get Films / Get Starships / Get Vehicles / Get Species / Get Planets
```
SwapiService.getPeople(page, wookiee).subscribe(res =>  {},err =>  {});

SwapiService.getFilms(page, wookiee).subscribe(res =>  {},err =>  {});

SwapiService.getStarships(page, wookiee).subscribe(res =>  {},err =>  {});

SwapiService.getVehicles(page, wookiee).subscribe(res =>  {},err =>  {});

SwapiService.getSpecies(page, wookiee).subscribe(res =>  {},err =>  {});

SwapiService.getPlanets(page, wookiee).subscribe(res =>  {},err =>  {});

```
Attributes:
- `page` number (default: null) - page number
- `wookiee` boolean (default: false) - wookiee translations

### Get Person / Get Film / Get Starship / Get Vehicle / Get Specie / Get Planet
```
SwapiService.getPeople(id, wookiee).subscribe(res =>  {},err =>  {});

SwapiService.getFilms(id, wookiee).subscribe(res =>  {},err =>  {});

SwapiService.getStarships(id, wookiee).subscribe(res =>  {},err =>  {});

SwapiService.getVehicles(id, wookiee).subscribe(res =>  {},err =>  {});

SwapiService.getSpecies(id, wookiee).subscribe(res =>  {},err =>  {});

SwapiService.getPlanets(id, wookiee).subscribe(res =>  {},err =>  {});

```
Attributes:
- `id` number (mandatory) - `:id` of the resource
- `wookiee` boolean (default: false) - wookiee translations

### Original documentation
Original documentation at [https://swapi.co/documentation](https://swapi.co/documentation).

AngularJS version [here](https://github.com/unshift-devs/xyz-angular-swapi) by [unshift-devs](https://github.com/unshift-devs)

## Designer
[Gianmaria Leoni](https://github.com/giammaleoni)

# ToDo
- Get Schema
- Complete documentation
- Testing
- Full working example
