import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Credential } from '../models/credential.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private mockCreds = [
    {
      userId: 'admin',
      password: '12345',
    },
    {
      userId: 'tester',
      password: '12345',
    },
    {
      userId: 'devloper',
      password: '12345',
    },
  ];
  constructor() {}

  login(cred: Credential): Observable<boolean> {
    return of(
      this.mockCreds.some(
        (c) => c.userId === cred.userId && c.password === cred.password
      )
    );
  }
}
