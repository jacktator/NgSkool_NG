import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

// import { QuoteService } from './quote.service';
import { School, SchoolService } from './school.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { untilDestroyed } from '@app/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // quote: string | undefined;
  schoolArray: Array<School> | undefined;
  isLoading = false;
  keyword: string;
  states = ['All', 'NSW', 'VIC', 'ACT', 'QLD', 'SA', 'WA', 'TAS'];
  selectedState = 'All';
  newSchoolForm!: FormGroup;

  // constructor(private quoteService: QuoteService) {}
  constructor(private schoolService: SchoolService, private formBuilder: FormBuilder) {
    this.initializeForm();
  }

  ngOnInit() {
    // Show Loading Screen.
    this.isLoading = true;

    this.schoolService
      .listSchools()
      .pipe(
        finalize(() => {
          // Stop loading, regardless the result.
          this.isLoading = false;
        })
      )
      .subscribe((downloadedSchools: Array<School>) => {
        this.schoolArray = downloadedSchools;
      });

    // this.quoteService
    //   .getRandomQuote({ category: 'dev' })
    //   .pipe(
    //     finalize(() => {
    //       this.isLoading = false;
    //     })
    //   )
    //   .subscribe((quote: string) => {
    //     this.quote = quote;
    //   });
  }

  createSchool() {
    // this.isLoading = true;
    // const login$ = this.schoolService.authenticationService.login(this.loginForm.value);
    // login$
    //   .pipe(
    //     finalize(() => {
    //       this.loginForm.markAsPristine();
    //       this.isLoading = false;
    //     }),
    //     untilDestroyed(this)
    //   )
    //   .subscribe(
    //     credentials => {
    //       log.debug(`${credentials.username} successfully logged in`);
    //       this.router.navigate([this.route.snapshot.queryParams.redirect || '/'], { replaceUrl: true });
    //     },
    //     error => {
    //       log.debug(`Login error: ${error}`);
    //       this.error = error;
    //     }
    //   );
  }

  private initializeForm() {
    this.newSchoolForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      state: ['All', Validators.required],
      numberOfStudents: ['100', Validators.required]
    });
  }
}
