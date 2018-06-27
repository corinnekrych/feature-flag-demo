import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';


import { AppComponent } from './app.component';
import {
  FABRIC8_FEATURE_TOGGLES_API_URL,
  FeatureFlagModule,
  FeatureTogglesService
} from 'ngx-feature-flag';
import {HttpModule} from '@angular/http';
import {AUTH_API_URL, AuthenticationService, REALM} from 'ngx-login-client';
import {Broadcaster} from 'ngx-base';
import {SSO_API_URL} from 'ngx-login-client/src/app/shared/sso-api';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ModalModule.forRoot(),
    // FeatureFooterModule,
    FeatureFlagModule
  ],
  providers: [
    {provide: AUTH_API_URL, useValue: 'https://auth.prod-preview.openshift.io/api/'},
    {provide: SSO_API_URL, useValue: 'https://sso.prod-preview.openshift.io/api/'},
    {provide: REALM, useValue: ''},
    {provide: FABRIC8_FEATURE_TOGGLES_API_URL, useValue: 'https://api.prod-preview.openshift.io/api/'},
    Broadcaster,
    AuthenticationService,
    FeatureTogglesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
