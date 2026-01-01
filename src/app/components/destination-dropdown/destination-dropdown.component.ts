import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-destination-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './destination-dropdown.component.html'
})
export class DestinationDropdownComponent {

  @Input() destinations: string[] = [];
  @Output() selected = new EventEmitter<string>();

  onChange(value: string): void {
    this.selected.emit(value);
  }
}
