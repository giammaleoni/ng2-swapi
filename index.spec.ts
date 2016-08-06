console.log("starting karma");
import {it, describe, expect, inject, fakeAsync, beforeEachProviders, tick} from 'angular2/testing';
import {MockBackend} from 'angular2/http/testing';
import {provide} from 'angular2/core';
import 'rxjs/add/operator/map';
import {Http, ConnectionBackend, BaseRequestOptions, Response, ResponseOptions} from 'angular2/http';
//import {SearchService} from './search.service';
import { SwapiService } from './index.ts';
export function main() {
  describe('Search Service', () => {

    it('should retrieve all search results',
    inject([SwapiService, MockBackend], fakeAsync((swapiService: SwapiService, mockBackend: MockBackend) => {
      var res:Response;
      mockBackend.connections.subscribe(c => {
        expect(c.request.url).toBe('shared/data/people.json');
        let response = new ResponseOptions({body: '[{"name": "John Elway"}, {"name": "Gary Kubiak"}]'});
        c.mockRespond(new Response(response));
      });
      swapiService.getRoot().subscribe((response) => {
        res = response;
      });
      tick();
      expect(res[0].name).toBe('John Elway');
    }))
  );

  beforeEachProviders(() => {
    return [BaseRequestOptions, MockBackend, SearchService,
      provide(Http, {
        useFactory: (backend:ConnectionBackend, defaultOptions:BaseRequestOptions) => {
          return new Http(backend, defaultOptions);
        }, deps: [MockBackend, BaseRequestOptions]
      }),
    ];
  });


});
}
