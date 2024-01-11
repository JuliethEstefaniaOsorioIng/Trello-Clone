import { Component } from '@angular/core';
import {
  faClock,
  faWaveSquare,
  faBox,
} from '@fortawesome/free-solid-svg-icons';
import { faTrello } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
})
export class BoardsComponent {
  faWaveSquare = faWaveSquare;
  faBox = faBox;
  faClock = faClock;
  faTrello = faTrello;
}
