import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DataService } from '../../../data.service';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingScreenComponent implements OnInit {
  constructor(private service: DataService) {}
  ngOnInit(): void {
    setTimeout(() => {
      this.service.loadingScreen$.next(false);
    }, 700);
  }
}
