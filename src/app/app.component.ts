import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ViewerComponent } from './viewer/viewer.component';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports:[ViewerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cdkPortalLoop';

  properties = [{
    name: 'prop1',
    type: 'text',
    value: 'my value 1'
  },
  {
    name: 'prop2',
    type: 'text',
    value: 'my value 2'
  }]
}
