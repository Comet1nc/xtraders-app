import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from '../../../models/user.model';

@Component({
  selector: 'competition-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCardComponent {
  @Input() user!: User;
  @Input() index!: number;

  public get place(): number {
    return this.index + 1;
  }

  public get suffix(): string {
    switch (this.index) {
      case 0:
        return 'st';
      case 1:
        return 'nd';
      case 2:
        return 'rd';
    }
    console.error('Wrong index');
    return '';
  }
}
