import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { StorageService } from '../../local-storage.service';
import { CalendarService } from '../calendar.service';
import { SpeechRecognitionService } from '../audioRecorder.service';
import { trigger, style, transition, animate, state } from '@angular/animations';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        opacity: .6,
        color: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class CalendarComponent implements OnDestroy {
  subscription: Subscription;
  token: String;
  calendars: Object;
  events: Array<Object> = [];
  isOpen;
  speechRecorder: Subscription;
  constructor(private storageService: StorageService,
    private calendarService: CalendarService,
    private speechRecognitionService: SpeechRecognitionService) {
    this.subscription = this.storageService.getUserDetails().subscribe(authDetails => {
      this.token = JSON.parse(authDetails['authDetails']).access_token;
      this.getcalendarIds();
    });
  }
  getcalendarIds() {
    this.calendarService.getCalendarList(this.token).subscribe(res => {
      this.calendars = res;
      this.getEventIds();
    }, (err) => this.errHandler(err));
  }
  getEventIds() {
    this.calendars['items'].forEach(item => {
      this.events.push({
        id: item.id,
        kind: item.kind,
        accessRole: item.accessRole,
        summary: item.summary,
        backgroundColor: item.backgroundColor,
        timeZone: item.timeZone,
      });
    });
    this.getEvents();
  }
  getEvents() {
    this.events.forEach(async (item, index) => {
      await new Promise(resolve => {
        this.calendarService.getEvents(this.token, item['id']).subscribe(res => {
          this.events[index]['events'] = res['items'];
          resolve();
        }, (err) => this.errHandler(err));
      });
    });
  }
  activateSpeechSearchMovie(): void {
    this.isOpen = true;
    this.speechRecorder = this.speechRecognitionService.record()
      .subscribe((value) => {
        console.log(value);
        this.processSpeechInformation(value);
      },
        (err) => {
          console.log(err);
          if (err.error === 'no-speech') {
            console.log('--restatring service--');
            this.activateSpeechSearchMovie();
          }
        },
        () => {
          console.log('--complete--');
        });
  }
  stopRecording() {
    this.isOpen = false;
    this.speechRecognitionService.DestroySpeechObject();
  }
  processSpeechInformation(speech) {
    this.calendarService.getBotResponce(speech);
  }
  errHandler(err) {
    this.storageService.deleteStorage();
  }
  ngOnDestroy() {
    this.stopRecording();
  }
}
