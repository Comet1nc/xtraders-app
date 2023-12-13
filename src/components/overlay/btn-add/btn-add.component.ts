import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-btn-add',
  templateUrl: './btn-add.component.html',
  styleUrls: ['./btn-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BtnAddComponent {}
