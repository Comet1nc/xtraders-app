import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'header-btn-add-friend',
  templateUrl: './btn-add-friend.component.html',
  styleUrls: ['./btn-add-friend.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BtnAddFriendComponent {
  constructor(public service: DataService) {}
}
