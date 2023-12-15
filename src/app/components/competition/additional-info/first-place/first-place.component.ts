import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'competition-first-place',
  templateUrl: './first-place.component.html',
  styleUrls: ['./first-place.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstPlaceComponent {
  @Input() user!: User;
}
