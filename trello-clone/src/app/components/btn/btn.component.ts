import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html'
})
export class BtnComponent {
  
  @Input() typeBtn: 'button' | 'reset' | 'submit'  = 'button';
  @Input() color = 'success';

  get colors(){
    return {
      'bg-success-700':this.color==='success',
      'hover:bg-success-800':this.color==='success',
      'focus:ring-sucess-300':this.color==='success',
      'bg-primary-700':this.color==='primary',
      'hover:bg-primary-800':this.color==='primary',
      'focus:ring-primary-300':this.color==='primary',
      'bg-red-700': this.color === 'warming',
      'hover:bg-red-800': this.color === 'warming',
      'focus:ring-red-300': this.color === 'warming',
    }
  }

}
