import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { StorageService } from '../local-storage.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth-handler',
  templateUrl: './auth-handler.component.html',
  styleUrls: ['./auth-handler.component.css']
})
export class AuthHandlerComponent {
  private authDetails: any;
  speechData: string;
  constructor(
    private userService: UserService,
    private storageService: StorageService,
    private router: Router,
    private route: ActivatedRoute) {
    this.formatQueryData();
  }
  getUserDetails(access_token) {
    this.userService.getUserDetails(access_token).subscribe(res => {
     this.storageService.setStorage('userProfileDetails', JSON.stringify(res));
     this.router.navigate(['../calendar'], { relativeTo: this.route });
     this.storageService.sendUserDetails();
    });
  }
  formatQueryData() {
    const hash = window.location.hash ? window.location.hash.split('#') : [];
    let toBeReturned = {};
    if (hash.length && hash[1].split('&').length) {
      toBeReturned = hash[1].split('&').reduce((acc, x) => {
        const hello = x.split('=');
        if (hello.length === 2) { acc[hello[0]] = hello[1]; }
        return acc;
      }, {});
    }
    const authDetails = Object.keys(toBeReturned).length ? toBeReturned : null;
    this.storageService.setStorage('authDetails', JSON.stringify(authDetails));
    this.getUserDetails(authDetails['access_token']);
  }
}
