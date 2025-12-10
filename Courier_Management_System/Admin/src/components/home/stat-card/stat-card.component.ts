import { Component, Input } from '@angular/core';
import { NgIf } from "../../../../node_modules/@angular/common/common_module.d-NEF7UaHr";

@Component({
  selector: 'app-stat-card',
  imports: [
    NgIf
],
  templateUrl: './stat-card.component.html',
  styleUrl: './stat-card.component.css'
})
export class StatCardComponent {

  @Input() title: string ='';

  @Input() value: number = 0;

  @Input() up: number =0;

  @Input() down: number = 0;
}
