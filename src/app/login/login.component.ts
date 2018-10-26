import { Component, OnInit } from '@angular/core';
import { StorageService } from '../local-storage.service';

// Google OAuth Service
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from '../auth.config';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: '',
})
export class LoginComponent implements OnInit {
  constructor(private storageService: StorageService,
    private oauthService: OAuthService,
    private router: Router,
    private route: ActivatedRoute) {}
  ngOnInit() {
    if (!this.storageService.getStorageValue()) {
      this.oauthService.configure(authConfig);
      this.oauthService.tokenValidationHandler = new JwksValidationHandler();
      this.oauthService.loadDiscoveryDocumentAndTryLogin();
      this.oauthService.initImplicitFlow();
    } else {
      this.storageService.sendUserDetails();
      this.router.navigate(['../calendar'], { relativeTo: this.route });
    }
  }
}
