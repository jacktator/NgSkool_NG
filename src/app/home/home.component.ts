import { Component, OnInit, OnDestroy } from '@angular/core';
import { finalize } from 'rxjs/operators';

// import { QuoteService } from './quote.service';
import { School, SchoolService } from './school.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { untilDestroyed } from '@app/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  // quote: string | undefined;
  schoolArray: Array<School> | undefined;
  isLoading = false;
  keyword: string;
  states = ['All', 'NSW', 'VIC', 'ACT', 'QLD', 'SA', 'WA', 'TAS'];
  selectedState = 'All';
  newSchoolForm!: FormGroup;
  error: any;

  // constructor(private quoteService: QuoteService) {}
  constructor(private schoolService: SchoolService, private formBuilder: FormBuilder, private toastr: ToastrService) {
    this.initializeForm();
  }

  ngOnInit() {
    // Show Loading Screen.
    this.isLoading = true;

    this.listSchools();
  }

  ngOnDestroy() {}

  listSchools() {
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
  }

  createSchool() {
    this.isLoading = true;
    const newSchool$ = this.schoolService.createSchool(this.newSchoolForm.value);
    newSchool$
      .pipe(
        finalize(() => {
          this.newSchoolForm.markAsPristine();
          this.isLoading = false;
        }),
        untilDestroyed(this)
      )
      .subscribe(
        newSchool => {
          delete this.error;
          // Append new school to schoolArray
          this.schoolArray.push(newSchool);
          // Show a toastr
          this.toastr.success(`Have fun!`, `${newSchool.name} created`, {
            timeOut: 3000
          });
        },
        error => {
          this.error = error;
          console.log(`Error creating school: ${error}`);
        }
      );
  }

  private initializeForm() {
    this.newSchoolForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      state: ['NSW', Validators.required],
      numberOfStudents: ['100', Validators.required]
    });
  }
}
