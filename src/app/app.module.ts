import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserXhr, HttpModule } from '@angular/http';
import { NgProgressModule, NgProgressBrowserXhr, NgProgressInterceptor } from 'ngx-progressbar';
import { HeaderComponent } from './component/header/header.component';

import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { CrmInterceptor } from './interceptor/crm.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LoginComponent } from './component/login/login.component';
import { OwlNativeDateTimeModule, OwlDateTimeModule } from 'ng-pick-datetime';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ConfirmationDialogComponent } from './component/confirmation-dialog/confirmation-dialog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationDialogService } from './component/confirmation-dialog/confirmation-dialog.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FileSizePipePipe } from './file-size-pipe.pipe';





export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
 
    LoginComponent,
    ConfirmationDialogComponent,
    FileSizePipePipe,
    
  

  
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgProgressModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    InfiniteScrollModule,
    OwlDateTimeModule, OwlNativeDateTimeModule,
    BrowserAnimationsModule,
    // NgxSpinnerModule,
    NgbModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: NgProgressInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CrmInterceptor,
      multi: true
    },
    ConfirmationDialogService
  ],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmationDialogComponent],
})
export class AppModule { }
