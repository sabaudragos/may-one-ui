import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {AuthGuard} from "./guard/auth-guard";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {LOCAL_STORAGE} from "ngx-webstorage-service";
import {LOCAL_STORAGE_SERVICE, LocalStorageService} from "./service/local-storage-service";
import {BasicAuthInterceptor} from "./interceptor/basic-auth-interceptor.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {AuthService} from "./service/auth-service";
import {UserService} from "./service/user-service";
import {MatInputModule} from "@angular/material/input";
import {NgbAlertModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthGuard,
    AuthService,
    LocalStorageService,
    UserService,
    {provide: LOCAL_STORAGE_SERVICE, useExisting: LOCAL_STORAGE},
    {provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
