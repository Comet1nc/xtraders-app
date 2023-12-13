import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CompetitionsComponent } from 'src/components/competitions/competitions.component';
import { HeaderComponent } from 'src/components/header/header.component';

@NgModule({
  declarations: [AppComponent, CompetitionsComponent, HeaderComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
