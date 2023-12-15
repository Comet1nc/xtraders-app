import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'competition-time-restrictions',
  templateUrl: './time-restrictions.component.html',
  styleUrls: ['./time-restrictions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimeRestrictionsComponent {
  @Input() daysPast!: number;
}
