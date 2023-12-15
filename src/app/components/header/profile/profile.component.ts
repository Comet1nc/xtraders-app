import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'header-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
  constructor(public service: DataService) {}
}
