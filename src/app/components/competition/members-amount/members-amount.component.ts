import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'competition-members-amount',
  templateUrl: './members-amount.component.html',
  styleUrls: ['./members-amount.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MembersAmountComponent {
  @Input() membersAmount!: number;
}
