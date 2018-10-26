import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { routes } from './app.router';
import { AuthHandlerComponent } from './auth-handler/auth-handler.component';

// Google OAuth Service
import { OAuthModule } from 'angular-oauth2-oidc';

import { AuthGuard } from './authGuard';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthHandlerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    OAuthModule.forRoot(),
    HttpClientModule,
    routes
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
