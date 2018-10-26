import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CalendarComponent } from './calendar/calendar.component';

import { calanderRouts } from './calendar.router';
import { SortPipe } from './sort.pipe';
import { SpeechRecognitionService } from './audioRecorder.service';

import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    calanderRouts,
    DragDropModule,
    MatCardModule,
  ],
  declarations: [HeaderComponent, FooterComponent, CalendarComponent, SortPipe],
  providers: [SpeechRecognitionService]
})
export class CalendarModule { }
