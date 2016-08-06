# Angular2 Service for Star Wars API
# ATTENTION! Service & Documentation still in progress

It uses [Star Wars API](https://swapi.co/) by Paul Hallet

## Installation
Run `npm install ng2-swapi --save` to install and add to your dependencies

### Installation optional
Depending on your actual settings you may need to:
- Add `ng2-swapi` path in your `map` object in `system.config.js`
 ```
 var map = {
   'app':         'app',
   ...
   'ng2-swapi':   'node_modules/ng2-swapi'
 };
 ```
- Add `ng2-swapi` package in your `packages` object in `system.config.js`
  ```
  var packages = {
    'app':       { main: 'main.js',  defaultExtension: 'js' },
    ...
    'ng2-swapi': { main: 'index.js', defaultExtension: 'js' }
  };
  ```

## Using
1.  Import SwapiService Component
```
    import { SwapiService } from './ng2-swapi';
```
2. Add it in the provider array of your component
```
    @Component({
        selector: 'my-custom-selector',
        templateUrl: 'my-componet-template.component.html',
        providers: [ SwapiService ]
    })
```
3. Add an argument of type `SwapiService` to your class  constructor
```
export class myComponent {
      constructor (private swapi: SwapiService) {}
    }
```
4. Call the desired method [(other available methods)](#methods-available)
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
swapi.getRoot(wookiee).subscribe(res =>  {},err =>  {});
```
Attributes:
- `wookiee` boolean (default: false) - wookiee translations

Returns
- `res` object - contain the response of the call
- `err` string - contain the error if something wrong occurred

### Get People / Get Films / Get Starships / Get Vehicles / Get Species / Get Planets
```
swapi.getPeople(page, wookiee).subscribe(res =>  {},err =>  {});

swapi.getFilms(page, wookiee).subscribe(res =>  {},err =>  {});

swapi.getStarships(page, wookiee).subscribe(res =>  {},err =>  {});

swapi.getVehicles(page, wookiee).subscribe(res =>  {},err =>  {});

swapi.getSpecies(page, wookiee).subscribe(res =>  {},err =>  {});

swapi.getPlanets(page, wookiee).subscribe(res =>  {},err =>  {});

```
Attributes:
- `page` number (default: null) - page number
- `wookiee` boolean (default: false) - wookiee translations

Returns
- `res` object - contain the response of the call
- `err` string - contain the error if something wrong occurred

### Get Person / Get Film / Get Starship / Get Vehicle / Get Specie / Get Planet
```
swapi.getPeople(id, wookiee).subscribe(res =>  {},err =>  {});

swapi.getFilms(id, wookiee).subscribe(res =>  {},err =>  {});

swapi.getStarships(id, wookiee).subscribe(res =>  {},err =>  {});

swapi.getVehicles(id, wookiee).subscribe(res =>  {},err =>  {});

swapi.getSpecies(id, wookiee).subscribe(res =>  {},err =>  {});

swapi.getPlanets(id, wookiee).subscribe(res =>  {},err =>  {});

```
Attributes:
- `id` number (mandatory) - `:id` of the resource
- `wookiee` boolean (default: false) - wookiee translations

Returns
- `res` object - contain the response of the call
- `err` string - contain the error if something wrong occurred

### Original documentation
Original documentation at [https://swapi.co/documentation](https://swapi.co/documentation).

AngularJS version [here](https://github.com/unshift-devs/xyz-angular-swapi) by [unshift-devs](https://github.com/unshift-devs)

## Designer
[Gianmaria Leoni](https://github.com/giammaleoni)

# ToDo
  - Testing
