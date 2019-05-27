import { Component, Input, OnInit } from '@angular/core';
import { School } from '@app/home/school.service';

@Component({
  selector: 'school-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() school: School;

  constructor() {}

  ngOnInit() {}
}
