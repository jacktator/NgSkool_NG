import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SchoolService } from './school.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SchoolFilterPipe } from './schoolfilter.pipe';
// import { QuoteService } from './quote.service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [HomeComponent, SchoolFilterPipe],
  providers: [SchoolService]
})
export class HomeModule {}
