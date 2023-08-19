import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input() public category !: string;

  @Input() public categories : any[] = [];

  @Output() public emitter  = new EventEmitter();

  filterCategories(event: Event) : void {
    this.emitter.emit(event);
  }
}
