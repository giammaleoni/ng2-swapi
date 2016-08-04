// Observable Version
import { Component, OnInit } from '@angular/core';
import { NgForm }    from '@angular/forms';
import { SwapiService } from '../services/swapi.service';
import { Endpoint } from './endpoint';



@Component({
  selector: 'response',
  templateUrl: 'app/components/response.component.html',
  providers: [ SwapiService ]
})
export class ResponseComponent implements OnInit {
  errorMessage: string;
  res: {};
  root: {};

  resources = [
    'root', 
    'people',
    'films',
    'starships',
    'vehicles',
    'species',
    'planets',
  ];
  url = new Endpoint();

  constructor (private swapi: SwapiService) {
  }

  getDetails(url: Endpoint) {
    this.swapi.get(url.what, url.index, url.wookiee)
                     .subscribe(
                       res =>  {this.res = res; this.errorMessage = ''},
                       err =>  {this.res = {};  this.errorMessage = <any>err});
  }

  onSubmit() {  
    console.log(this.url);
    this.getDetails(this.url);
    this.resetForm();
  }

  resetForm(){
    this.url = new Endpoint();
  }

}