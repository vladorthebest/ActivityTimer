import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActivityTimerModule } from './activity-timer/activity-timer.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { HttpRequestInterceptor } from './core/interceptors/HttpRequestInterceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AuthModule, CoreModule, ActivityTimerModule],
  providers: [[{ provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true }]],
  bootstrap: [AppComponent],
})
export class AppModule {}
