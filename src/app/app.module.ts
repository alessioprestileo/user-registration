// Angular2 imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { XHRBackend } from '@angular/http';
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryData }               	 from './shared/utils/in-memory-data';

// App specific imports
import { AppComponent } from './app.component';
import { UsersRegisterService } from "./shared/services/users-register.service";
import { UserRegistrationModule } from "./shared/modules/user-registration/user-registration.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Angular modules
    BrowserModule,
    FormsModule,
    HttpModule,
    // App-specific modules
    UserRegistrationModule
  ],
  providers: [
    UsersRegisterService,
    { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    { provide: SEED_DATA,  useClass: InMemoryData }     // in-mem server data
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
