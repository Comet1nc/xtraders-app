import { Injectable } from '@angular/core';
import { Data } from './models/data.model';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { data } from './models/mockData';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  loadingScreen$ = new BehaviorSubject<boolean>(false);
  data$: Observable<Data> = of(data);

  constructor() {}
}
