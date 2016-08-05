# Angular2 Service for Star Wars API

It use [Star Wars API](https://swapi.co/) by Paul Hallet

## Installation
- clone or fork the reporsitory
- `cd` in your project
- run http server (install with `npm install http-server -g`)
- open browser

## Using
- Import SwapiService Component
<pre>
    import { SwapiService } from '../services/swapi.service';
</pre>
- Add it as a provider of the component
```
    @Component({
        selector: 'my-custom-selector',
        templateUrl: 'my-componet-template.component.html',
        providers: [ SwapiService ]
    })
```
- Add the Service as a private variable of the constructor
```
    constructor (private swapi: SwapiService) {}
```
- Call the API
<pre>
    this.swapi.get(url.what, url.index, url.wookiee)
                .subscribe(res =>  {},err =>  {});
</pre>

## Documentation

## Methods available
#### Get Root
```
SwapiService.getRoot(wookiee: boolean)
.subscribe(
  res =>  {},
  err =>  {});
```
Variables:
- wookiee: boolean

#### Get People
```
SwapiService.getPeople(page: number = null, wookiee: boolean = false)
.subscribe(
  res =>  {},
  err =>  {});
```

Variables:
- `page: number = null`
- `wookiee: boolean = false`

It returns an object in `JSON` format

### Original documentation
Original documentation at [https://swapi.co/documentation](https://swapi.co/documentation).

AngularJS version [here](https://github.com/unshift-devs/xyz-angular-swapi) by [unshift-devs](https://github.com/unshift-devs)

## Designer
---

[Gianmaria Leoni](https://github.com/giammaleoni)

# ToDo
- Get Schema
- Get All resources
- Complete documentation
- Testing
- Full working example
