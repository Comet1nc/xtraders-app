import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CompetitionComponent } from 'src/components/competitions/competition.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { BtnAddComponent } from 'src/components/overlay/btn-add/btn-add.component';
import { UserCardComponent } from 'src/components/competitions/user-card/user-card.component';
import { LoadingScreenComponent } from 'src/components/overlay/loading-screen/loading-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    CompetitionComponent,
    HeaderComponent,
    BtnAddComponent,
    UserCardComponent,
    LoadingScreenComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
