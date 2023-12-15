import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OverlayModule } from './components/overlay/overlay.module';
import { HeaderModule } from './components/header/header.module';
import { CompetitionModule } from './components/competition/competition.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, OverlayModule, HeaderModule, CompetitionModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
