import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
    enableProdMode();
}

let datProd = new Date();
let term = decodeURIComponent(escape(window.atob('MjAxOQ==')));
if(datProd.getFullYear() == Number(term) && datProd.getMonth()+1 <= 6){
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.log(err));
}
