// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  userDetails : 'https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=',
  calendarList: 'https://www.googleapis.com/calendar/v3/users/me/calendarList',
  calendars: 'https://www.googleapis.com/calendar/v3/calendars',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
