import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  client = new ApiAiClient({ accessToken: 'cee3fec3215e4502b2da8c09b0e24328' });
  constructor(private http: HttpClient) { }
  getHeader(token) {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`,
    });
    return { headers };
  }
  getCalendarList(token) {
    return this.http.get(environment.calendarList, this.getHeader(token));
  }
  getEvents(token, id) {
    const today = new Date();
    const myTodayStart = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate() - 1}T18:30:00.000Z`;
    const myTodayEnd = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate() }T18:30:00.000Z`;
    return this.http.get(
      `${environment.calendars}/${encodeURIComponent(id)}/events?timeMin=${myTodayStart}&timeMax=${myTodayEnd}`,
      this.getHeader(token));
  }
  getBotResponce(text) {
    const promise = this.client.textRequest(text).then((res) => {
      console.log(res);
    });
  }
}
