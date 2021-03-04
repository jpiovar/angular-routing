import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentMainComponent } from './components/component-main/component-main.component';
import { ComponentDetailComponent } from './components/component-detail/component-detail.component';
import { ComponentMainDataComponent } from './components/component-main-data/component-main-data.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentMainComponent,
    ComponentDetailComponent,
    ComponentMainDataComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
