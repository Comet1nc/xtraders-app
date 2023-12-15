import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FirstPlaceComponent } from './additional-info/first-place/first-place.component';
import { PrizeComponent } from './additional-info/prize/prize.component';
import { TimeRestrictionsComponent } from './additional-info/time-restrictions/time-restrictions.component';
import { CompetitionComponent } from './competition.component';
import { MembersAmountComponent } from './members-amount/members-amount.component';
import { UserCardComponent } from './user-card/user-card.component';

@NgModule({
  declarations: [
    CompetitionComponent,
    UserCardComponent,
    MembersAmountComponent,
    TimeRestrictionsComponent,
    FirstPlaceComponent,
    PrizeComponent,
  ],
  imports: [CommonModule],
  providers: [],
  exports: [CompetitionComponent],
})
export class CompetitionModule {}
