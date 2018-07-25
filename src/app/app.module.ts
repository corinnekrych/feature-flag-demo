import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {
  FABRIC8_FEATURE_TOGGLES_API_URL,
  FeatureFlagModule,
  FeatureTogglesService
} from 'ngx-feature-flag';
import {AUTH_API_URL, AuthenticationService, REALM, UserService} from 'ngx-login-client-fork';
import {Broadcaster, Logger} from 'ngx-base';
import {SSO_API_URL} from 'ngx-login-client-fork/src/app/shared/sso-api';
import { ModalModule } from 'ngx-bootstrap/modal';
import {HttpModule} from '@angular/http';
import {Router, RouterModule, Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'ff',
    loadChildren: './feature-flag/toggles.module#TogglesModule',
    data: {
      title: 'Feature Flag'
    }
  }
  ];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    ModalModule.forRoot(),
    // FeatureFooterModule,
    FeatureFlagModule,
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  providers: [
    {provide: AUTH_API_URL, useValue: 'https://auth.prod-preview.openshift.io/api/'},
    {provide: SSO_API_URL, useValue: 'https://sso.prod-preview.openshift.io/api/'},
    {provide: REALM, useValue: ''},
    {provide: FABRIC8_FEATURE_TOGGLES_API_URL, useValue: 'https://api.prod-preview.openshift.io/api/'},
    Broadcaster,
    AuthenticationService,
    UserService,
    Logger,
    FeatureTogglesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
