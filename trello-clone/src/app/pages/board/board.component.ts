import { Component, Output } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { ToDo, Column } from 'src/app/models/todo.model';
import { FormControl } from '@angular/forms';
import { Dialog } from '@angular/cdk/dialog';
import { TodoDialogComponent } from 'src/app/components/todo-dialog/todo-dialog.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styles: [
    `
      /* Animate items as they're being sorted. */
      .cdk-drop-list-dragging .cdk-drag {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }

      /* Animate an item that has been dropped. */
      .cdk-drag-animating {
        transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
      }
    `,
  ],
})
export class BoardComponent {
  constructor(private dialog: Dialog) {}

  faPlus = faPlus;
  faXmark = faXmark;
  list: boolean = false;
  card: boolean = false;

  name = new FormControl('');

  columns: Column[] = [
    {
      id: '5',
      title: 'ToDo',
      todos: [
        {
          id: '1',
          title: 'Make dishes',
        },
        {
          id: '2',
          title: 'Buy a Unicorn',
        },
      ],
    },
    {
      id: '6',
      title: 'Doing',
      todos: [
        {
          id: '3',
          title: 'Watch angular path in platzi',
        },
      ],
    },
    {
      id: '7',
      title: 'Done',
      todos: [
        {
          id: '4',
          title: 'play video games',
        },
      ],
    },
  ];

  drop(event: CdkDragDrop<ToDo[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  dropColumn(event: CdkDragDrop<ToDo[]>) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }

  addColumn() {
    if (this.name.value) {
      this.columns.push({
        id: '8',
        title: this.name.value,
        todos: [],
      });
    }
    this.name.reset();
  }

  newColumn(event: boolean) {
    if (event === true) {
      this.list = true;
      this.name.reset();
    } else {
      this.list = false;
    }
  }

  newCard(event: boolean /*element: string*/) {
    //console.log(element);

    if (event === true) {
      this.card = true;
      this.name.reset();
    } else {
      this.card = false;
    }
  }

  addCard() {}

  openDialog(todo: ToDo) {
    const dialogRef = this.dialog.open(TodoDialogComponent, {
      data: {
        todo: todo,
      },
    });

    dialogRef.closed.subscribe(output=>{
      console.log(output);
      
    });
  }
}
