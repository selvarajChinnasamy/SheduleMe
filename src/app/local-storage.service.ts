import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private userSubject = new BehaviorSubject<any>(this.getStorageValue());
  constructor() { }
  setStorage(key, value) {
    localStorage.setItem(key, value);
  }
  getStorageValue() {
    const userDetails = {};
    userDetails['authDetails'] = localStorage.getItem('authDetails');
    userDetails['userProfileDetails'] = localStorage.getItem('userProfileDetails');
    return (userDetails['authDetails'] && userDetails['userProfileDetails']) ? userDetails : null;
  }
  sendUserDetails() {
    this.userSubject.next(this.getStorageValue());
  }
  getUserDetails() {
    return this.userSubject;
  }
  deleteStorage() {
    localStorage.clear();
  }
}
