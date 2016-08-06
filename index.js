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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var SwapiService = (function () {
    function SwapiService(http) {
        this.http = http;
        this.baseUrl = 'https://swapi.co/api/';
    }
    // "people": "http://swapi.co/api/people/",
    // "planets": "http://swapi.co/api/planets/",
    // "films": "http://swapi.co/api/films/",
    // "species": "http://swapi.co/api/species/",
    // "vehicles": "http://swapi.co/api/vehicles/",
    // "starships": "http://swapi.co/api/starships/"
    SwapiService.prototype.getRoot = function (wookiee) {
        if (wookiee === void 0) { wookiee = false; }
        var completeUrl = this.baseUrl;
        if (wookiee) {
            completeUrl += '?format=wookiee';
        }
        return this.getCall(completeUrl);
    };
    SwapiService.prototype.getPeople = function (page, wookiee) {
        if (page === void 0) { page = null; }
        if (wookiee === void 0) { wookiee = false; }
        var completeUrl = this.baseUrl + 'people/';
        if (page || wookiee) {
            completeUrl += '?';
        }
        if (page) {
            completeUrl += 'page=' + page;
        }
        if (page && wookiee) {
            completeUrl += '&';
        }
        if (wookiee) {
            completeUrl += 'format=wookiee';
        }
        return this.getCall(completeUrl);
    };
    SwapiService.prototype.getPlanets = function (page, wookiee) {
        if (page === void 0) { page = null; }
        if (wookiee === void 0) { wookiee = false; }
        var completeUrl = this.baseUrl + 'planets/';
        if (page || wookiee) {
            completeUrl += '?';
        }
        if (page) {
            completeUrl += 'page=' + page;
        }
        if (page && wookiee) {
            completeUrl += '&';
        }
        if (wookiee) {
            completeUrl += 'format=wookiee';
        }
        return this.getCall(completeUrl);
    };
    SwapiService.prototype.getFilms = function (page, wookiee) {
        if (page === void 0) { page = null; }
        if (wookiee === void 0) { wookiee = false; }
        var completeUrl = this.baseUrl + 'films/';
        if (page || wookiee) {
            completeUrl += '?';
        }
        if (page) {
            completeUrl += 'page=' + page;
        }
        if (page && wookiee) {
            completeUrl += '&';
        }
        if (wookiee) {
            completeUrl += 'format=wookiee';
        }
        return this.getCall(completeUrl);
    };
    SwapiService.prototype.getSpecies = function (page, wookiee) {
        if (page === void 0) { page = null; }
        if (wookiee === void 0) { wookiee = false; }
        var completeUrl = this.baseUrl + 'species/';
        if (page || wookiee) {
            completeUrl += '?';
        }
        if (page) {
            completeUrl += 'page=' + page;
        }
        if (page && wookiee) {
            completeUrl += '&';
        }
        if (wookiee) {
            completeUrl += 'format=wookiee';
        }
        return this.getCall(completeUrl);
    };
    SwapiService.prototype.getVehicles = function (page, wookiee) {
        if (page === void 0) { page = null; }
        if (wookiee === void 0) { wookiee = false; }
        var completeUrl = this.baseUrl + 'vehicles/';
        if (page || wookiee) {
            completeUrl += '?';
        }
        if (page) {
            completeUrl += 'page=' + page;
        }
        if (page && wookiee) {
            completeUrl += '&';
        }
        if (wookiee) {
            completeUrl += 'format=wookiee';
        }
        return this.getCall(completeUrl);
    };
    SwapiService.prototype.getStarships = function (page, wookiee) {
        if (page === void 0) { page = null; }
        if (wookiee === void 0) { wookiee = false; }
        var completeUrl = this.baseUrl + 'starships/';
        if (page || wookiee) {
            completeUrl += '?';
        }
        if (page) {
            completeUrl += 'page=' + page;
        }
        if (page && wookiee) {
            completeUrl += '&';
        }
        if (wookiee) {
            completeUrl += 'format=wookiee';
        }
        return this.getCall(completeUrl);
    };
    SwapiService.prototype.getPerson = function (id, wookiee) {
        if (wookiee === void 0) { wookiee = false; }
        var completeUrl = this.baseUrl + 'people/' + id + '/';
        if (wookiee) {
            completeUrl += '?format=wookiee';
        }
        return this.getCall(completeUrl);
    };
    SwapiService.prototype.getPlanet = function (id, wookiee) {
        if (wookiee === void 0) { wookiee = false; }
        var completeUrl = this.baseUrl + 'planets/' + id + '/';
        if (wookiee) {
            completeUrl += '?format=wookiee';
        }
        return this.getCall(completeUrl);
    };
    SwapiService.prototype.getFilm = function (id, wookiee) {
        if (wookiee === void 0) { wookiee = false; }
        var completeUrl = this.baseUrl + 'films/' + id + '/';
        if (wookiee) {
            completeUrl += '?format=wookiee';
        }
        return this.getCall(completeUrl);
    };
    SwapiService.prototype.getSpecie = function (id, wookiee) {
        if (wookiee === void 0) { wookiee = false; }
        var completeUrl = this.baseUrl + 'species/' + id + '/';
        if (wookiee) {
            completeUrl += '?format=wookiee';
        }
        return this.getCall(completeUrl);
    };
    SwapiService.prototype.getVehicle = function (id, wookiee) {
        if (wookiee === void 0) { wookiee = false; }
        var completeUrl = this.baseUrl + 'vehicles/' + id + '/';
        if (wookiee) {
            completeUrl += '?format=wookiee';
        }
        return this.getCall(completeUrl);
    };
    SwapiService.prototype.getStarship = function (id, wookiee) {
        if (wookiee === void 0) { wookiee = false; }
        var completeUrl = this.baseUrl + 'starships/' + id + '/';
        if (wookiee) {
            completeUrl += '?format=wookiee';
        }
        return this.getCall(completeUrl);
    };
    SwapiService.prototype.getCall = function (url) {
        console.log(url);
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    };
    SwapiService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    SwapiService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    SwapiService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], SwapiService);
    return SwapiService;
    var _a;
}());
exports.SwapiService = SwapiService;
//# sourceMappingURL=index.js.map