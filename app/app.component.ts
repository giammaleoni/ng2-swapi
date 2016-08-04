import { Component }         from '@angular/core';

// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';

import { ResponseComponent }        from './components/response.component';

@Component({
  selector: 'my-app',
  template: `
    <response></response>
  `,
/*
  providers: [ HTTP_PROVIDERS ]
*/
  directives: [
    ResponseComponent
  ]
})
export class AppComponent { }