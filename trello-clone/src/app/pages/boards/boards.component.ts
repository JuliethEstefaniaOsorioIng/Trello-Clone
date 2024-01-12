import { Component } from '@angular/core';
import {
  faClock,
  faWaveSquare,
  faBox,
  faAngleUp,
  faAngleDown,
  faHeart,
  faBorderAll,
  faUsers,
  faGear,
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
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  faHeart = faHeart;
  faBorderAll = faBorderAll;
  faUsers = faUsers;
  faGear = faGear;

  // Dinamic accordion

  // items=[
  //   {
  //     label: 'Item 1',
  //     items:[
  //       {
  //         label: 'Sub item 1.1'
  //       },
  //       {
  //         label: 'Sub item 1.2'
  //       }
  //     ]
  //   },
  //   {
  //     label: 'Item 2',
  //     items:[
  //       {
  //         label: 'Sub item 2.1'
  //       }
  //     ]
  //   },
  //   {
  //     label: 'Item 3',
  //     items:[
  //       {
  //         label: 'Sub item 3.1'
  //       },
  //       {
  //         label: 'Sub item 3.2'
  //       },
  //       {
  //         label: 'Sub item 3.3'
  //       }
  //     ]
  //   }
  // ]
}
