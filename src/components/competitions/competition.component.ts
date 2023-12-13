import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Competition } from 'src/app/models/competition.model';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompetitionComponent {
  @Input() competition!: Competition;
  constructor(public service: DataService) {}
}
