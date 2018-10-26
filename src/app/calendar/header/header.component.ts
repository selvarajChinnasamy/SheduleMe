import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { StorageService } from '../../local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy {
  subscription: Subscription;
  userImg: String;
  name: String;
  constructor(private storageService: StorageService) {
    this.subscription = this.storageService.getUserDetails().subscribe(user => {
      this.userImg = JSON.parse(user.userProfileDetails).picture ? JSON.parse(user.userProfileDetails).picture + '?sz=30' : '';
      this.name = JSON.parse(user.userProfileDetails).name ? JSON.parse(user.userProfileDetails).name : '';
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
