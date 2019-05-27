import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

import { Credentials, CredentialsService } from './credentials.service';

export interface LoginContext {
  username: string;
  password: string;
  remember?: boolean;
}

/**
 * Provides a base for authentication workflow.
 * The login/logout methods should be replaced with proper implementation.
 */
@Injectable()
export class AuthenticationService {
  constructor(private credentialsService: CredentialsService) {}

  /**
   * Authenticates the user.
   * @param context The login parameters.
   * @return The user credentials.
   */
  login(context: LoginContext): Observable<Credentials> {
    const authData = {
      username: context.username,
      password: context.password
    };

    // Begin: Replace by proper authentication call
    let demoAuthData;
    if (authData.username === 'demo' && authData.password === 'demo') {
      // Correct Credential, update localStorage with new credential
      const token = 'returned-token';
      demoAuthData = {
        username: context.username,
        token: token
      };
      this.credentialsService.setCredentials(demoAuthData, context.remember);
      return of(demoAuthData);
    } else {
      // Incorrect Credential, remove old credential from localStorage
      this.credentialsService.removeCredentials();
      return throwError('Username or password incorrect.');
    }
    // End: Replace by proper authentication call
  }

  /**
   * Logs out the user and clear credentials.
   * @return True if the user was logged out successfully.
   */
  logout(): Observable<boolean> {
    // Customize credentials invalidation here
    this.credentialsService.setCredentials();
    return of(true);
  }
}
