import {CanActivate} from '@angular/router';
import { StorageService } from './local-storage.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private storageService: StorageService) {}
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.storageService.getStorageValue() ? true : false;
  }
}
