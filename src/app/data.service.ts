import { Injectable } from '@angular/core';
import { Data } from './models/data.model';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  loadingScreen$ = new BehaviorSubject<boolean>(false);
  data$: Observable<Data> = of({
    competitions: [
      {
        name: 'Weekly Challenges',
        usersAmount: 21,
        isOver: true,
        daysPast: 3,
        bestUsers: [
          {
            firstName: 'Roger',
            lastName: 'Korsgaard',
            isVerified: true,
            alerts: 20,
            winRate: '85%',
            yield: '11%',
            isProfitable: true,
            currency: '$',
            moneyValue: '7,500',
            percentage: '45%',
            tag: '@rog13k',
            profilePictureUrl:
              '../../assets/competitions/1st-first-profile-img.png',
          },
          {
            firstName: 'Charlie',
            lastName: 'Herwitz',
            isVerified: true,
            alerts: 20,
            winRate: '85%',
            yield: '11%',
            isProfitable: true,
            currency: '$',
            moneyValue: '1,430',
            percentage: '25%',
            tag: '@charlie283',
            profilePictureUrl:
              '../../assets/competitions/2st-first-profile-img.png',
          },
          {
            firstName: 'Ahmad',
            lastName: 'Mango',
            isVerified: false,
            alerts: 20,
            winRate: '85%',
            yield: '11%',
            isProfitable: false,
            currency: '$',
            moneyValue: '1,500',
            percentage: '10%',
            tag: '@ahmad233',
            profilePictureUrl:
              '../../assets/competitions/3st-first-profile-img.png',
          },
        ],
      },
      {
        name: 'Double Gain Week Contest',
        usersAmount: 21,
        isOver: false,
        daysPast: 3,
        bestUsers: [
          {
            firstName: 'Zain',
            lastName: 'Mango',
            isVerified: true,
            alerts: 20,
            winRate: '85%',
            yield: '11%',
            isProfitable: true,
            currency: '$',
            moneyValue: '7,500',
            percentage: '45%',
            tag: '@mango144',
            profilePictureUrl:
              '../../assets/competitions/1st-second-profile-img.png',
          },
          {
            firstName: 'Victoria',
            lastName: 'Winston',
            isVerified: true,
            alerts: 20,
            winRate: '85%',
            yield: '11%',
            isProfitable: false,
            currency: '$',
            moneyValue: '3,430',
            percentage: '25%',
            tag: '@charlie283',
            profilePictureUrl:
              '../../assets/competitions/2st-first-profile-img.png',
          },
          {
            firstName: 'Alex',
            lastName: 'King',
            isVerified: false,
            alerts: 20,
            winRate: '85%',
            yield: '11%',
            isProfitable: false,
            currency: '$',
            moneyValue: '1,500',
            percentage: '10%',
            tag: '@ahmad233',
            profilePictureUrl:
              '../../assets/competitions/3st-first-profile-img.png',
          },
        ],
      },
    ],
  });

  constructor() {}
}