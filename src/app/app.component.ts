import { Component } from '@angular/core';
import { DataService } from './data.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loadingScreenDelayed$ = this.dataService.loadingScreen$.pipe(delay(300));
  constructor(public dataService: DataService) {}
}
