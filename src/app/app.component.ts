import { CookieService } from 'ngx-cookie-service';
import { LoginService } from './services/login.service';
import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { WellmarkError } from '@wellmark/wm-lib-ux';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  form = this.fb.group({
    userId: ['admin', Validators.required],
    password: ['12345', Validators.required],
  });
  messageError: WellmarkError[] = [];
  constructor(
    private fb: FormBuilder,
    private login: LoginService,
    private cookieService: CookieService
  ) {}
  onLogin() {
    this.messageError = [];
    this.login.login(this.form.value).subscribe((result) => {
      if (result) {
        const redirectUrl = this.cookieService.get(environment.cookieKey);
        if (redirectUrl) {
          document.location.href = redirectUrl;
        } else {
          this.messageError.push(new WellmarkError('', 'Cookies Not found'));
        }
      } else {
        this.messageError.push(new WellmarkError('', 'Invalid Credential'));
      }
    });
  }
}
