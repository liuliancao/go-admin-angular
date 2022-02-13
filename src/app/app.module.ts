import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './@core/core.module';
import { SharedModule } from './@shared/shared.module';
import { Observable, of } from 'rxjs';
import { I18N } from '../config/language-config';
import { OpComponent } from './op/op.component';
import { OpModule } from './op/op.module';
import { httpInterceptorProviders } from 'src/app/@core/http/op.interceptor';

class I18NLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<Object> {
    return of(I18N[lang])
  }
}

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        CoreModule.forRoot(),
        SharedModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useClass: I18NLoader
            }
        }),
        OpModule,
  ],
  providers: [ httpInterceptorProviders ],
  bootstrap: [AppComponent],
})
export class AppModule {}
