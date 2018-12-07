import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.css']
})
export class ProductitemComponent {
  @Input()  name: string;
  @Output() added = new EventEmitter<boolean>();
  didadd = false;
 
  add(agreed: boolean) {
    this.added.emit(agreed);
    this.didadd = true;
  }
}