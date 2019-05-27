import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { SchoolService } from './school.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;

  constructor(private schoolService: SchoolService) {}

  ngOnInit() {
    this.isLoading = true;
    this.schoolService
      .getRandomQuote({ category: 'dev' })
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((quote: string) => {
        this.quote = quote;
      });
  }
}
