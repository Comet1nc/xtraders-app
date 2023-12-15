import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { BtnAddFriendComponent } from './btn-add-friend/btn-add-friend.component';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent, ProfileComponent, BtnAddFriendComponent],
  imports: [CommonModule],
  providers: [],
  exports: [HeaderComponent],
})
export class HeaderModule {}
