"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Observable Version
var core_1 = require('@angular/core');
var ng2_swapi_1 = require('ng2-swapi');
var endpoint_1 = require('./endpoint');
var ResponseComponent = (function () {
    function ResponseComponent(swapi) {
        this.swapi = swapi;
        this.resources = [
            'root',
            'people',
            'films',
            'starships',
            'vehicles',
            'species',
            'planets',
            'person',
            'film',
            'starship',
            'vehicle',
            'specie',
            'planet',
            'person schema',
            'film schema',
            'starship schema',
            'vehicle shcema',
            'specie schema',
            'planet schema'
        ];
        this.url = new endpoint_1.Endpoint();
    }
    ResponseComponent.prototype.getDetails = function (req) {
        var _this = this;
        switch (req.resource) {
            case this.resources[0]:
                this.swapi.getRoot(req.wookiee)
                    .subscribe(function (res) { _this.res = res; _this.errorMessage = ''; }, function (err) { _this.res = {}; _this.errorMessage = err; });
                break;
            case this.resources[1]:
                this.swapi.getPeople(req.index, req.wookiee)
                    .subscribe(function (res) { _this.res = res; _this.errorMessage = ''; }, function (err) { _this.res = {}; _this.errorMessage = err; });
                break;
            case this.resources[2]:
                this.swapi.getFilms(req.index, req.wookiee)
                    .subscribe(function (res) { _this.res = res; _this.errorMessage = ''; }, function (err) { _this.res = {}; _this.errorMessage = err; });
                break;
            case this.resources[3]:
                this.swapi.getStarships(req.index, req.wookiee)
                    .subscribe(function (res) { _this.res = res; _this.errorMessage = ''; }, function (err) { _this.res = {}; _this.errorMessage = err; });
                break;
            case this.resources[4]:
                this.swapi.getVehicles(req.index, req.wookiee)
                    .subscribe(function (res) { _this.res = res; _this.errorMessage = ''; }, function (err) { _this.res = {}; _this.errorMessage = err; });
                break;
            case this.resources[5]:
                this.swapi.getSpecies(req.index, req.wookiee)
                    .subscribe(function (res) { _this.res = res; _this.errorMessage = ''; }, function (err) { _this.res = {}; _this.errorMessage = err; });
                break;
            case this.resources[6]:
                this.swapi.getPlanets(req.index, req.wookiee)
                    .subscribe(function (res) { _this.res = res; _this.errorMessage = ''; }, function (err) { _this.res = {}; _this.errorMessage = err; });
                break;
            case this.resources[7]:
                this.swapi.getPerson(req.index, req.wookiee)
                    .subscribe(function (res) { _this.res = res; _this.errorMessage = ''; }, function (err) { _this.res = {}; _this.errorMessage = err; });
                break;
            case this.resources[8]:
                this.swapi.getFilm(req.index, req.wookiee)
                    .subscribe(function (res) { _this.res = res; _this.errorMessage = ''; }, function (err) { _this.res = {}; _this.errorMessage = err; });
                break;
            case this.resources[9]:
                this.swapi.getStarship(req.index, req.wookiee)
                    .subscribe(function (res) { _this.res = res; _this.errorMessage = ''; }, function (err) { _this.res = {}; _this.errorMessage = err; });
                break;
            case this.resources[10]:
                this.swapi.getVehicle(req.index, req.wookiee)
                    .subscribe(function (res) { _this.res = res; _this.errorMessage = ''; }, function (err) { _this.res = {}; _this.errorMessage = err; });
                break;
            case this.resources[11]:
                this.swapi.getSpecie(req.index, req.wookiee)
                    .subscribe(function (res) { _this.res = res; _this.errorMessage = ''; }, function (err) { _this.res = {}; _this.errorMessage = err; });
                break;
            case this.resources[12]:
                this.swapi.getPlanet(req.index, req.wookiee)
                    .subscribe(function (res) { _this.res = res; _this.errorMessage = ''; }, function (err) { _this.res = {}; _this.errorMessage = err; });
                break;
            case this.resources[13]:
                this.swapi.getPersonSchema()
                    .subscribe(function (res) { _this.res = res; _this.errorMessage = ''; }, function (err) { _this.res = {}; _this.errorMessage = err; });
                break;
            case this.resources[14]:
                this.swapi.getFilmSchema()
                    .subscribe(function (res) { _this.res = res; _this.errorMessage = ''; }, function (err) { _this.res = {}; _this.errorMessage = err; });
                break;
            case this.resources[15]:
                this.swapi.getStarshipSchema()
                    .subscribe(function (res) { _this.res = res; _this.errorMessage = ''; }, function (err) { _this.res = {}; _this.errorMessage = err; });
                break;
            case this.resources[16]:
                this.swapi.getVehicleSchema()
                    .subscribe(function (res) { _this.res = res; _this.errorMessage = ''; }, function (err) { _this.res = {}; _this.errorMessage = err; });
                break;
            case this.resources[17]:
                this.swapi.getSpecieSchema()
                    .subscribe(function (res) { _this.res = res; _this.errorMessage = ''; }, function (err) { _this.res = {}; _this.errorMessage = err; });
                break;
            case this.resources[18]:
                this.swapi.getPlanetSchema()
                    .subscribe(function (res) { _this.res = res; _this.errorMessage = ''; }, function (err) { _this.res = {}; _this.errorMessage = err; });
                break;
            default:
                break;
        }
    };
    ResponseComponent.prototype.onSubmit = function () {
        console.log(this.url);
        this.getDetails(this.url);
        //this.resetForm();
    };
    ResponseComponent.prototype.resetForm = function () {
        this.url = new endpoint_1.Endpoint();
    };
    ResponseComponent = __decorate([
        core_1.Component({
            selector: 'response',
            templateUrl: 'app/components/response.component.html',
            providers: [ng2_swapi_1.SwapiService]
        }), 
        __metadata('design:paramtypes', [ng2_swapi_1.SwapiService])
    ], ResponseComponent);
    return ResponseComponent;
}());
exports.ResponseComponent = ResponseComponent;
//# sourceMappingURL=response.component.js.map