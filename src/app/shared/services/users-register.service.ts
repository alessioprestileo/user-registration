import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from "../models/User";

@Injectable()
export class UsersRegisterService {
  private url: string = 'src/users';

  constructor(private http: Http) { }

  /* Private methods */
  private static handleError(error: any) : Promise<any> {
    alert('An error occurred with the server:\n' + error.status +
      ', ' + error.statusText);
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
  private post(user: User) : Promise<User> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http
      .post(this.url, JSON.stringify(user), { headers: headers })
      .toPromise()
      .then(res => res.json().data)
      .catch(UsersRegisterService.handleError);
  }
  private put(user: User) : Promise<User> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${this.url}/${user.id}`;
    return this.http
      .put(url, JSON.stringify(user), { headers: headers })
      .toPromise()
      .then(() => user)
      .catch(UsersRegisterService.handleError);
  }
  private remove(id: number) : Promise<any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${this.url}/${id}`;
    return this.http
      .delete(url, headers)
      .toPromise()
      .catch(UsersRegisterService.handleError);
  }
  /* Public methods */
  public getAll() : Promise<User[]> {
    return this.http.get(this.url).toPromise().then(
      response => response.json().data
    ).catch(UsersRegisterService.handleError);
  }
  public isAlreadyRegistered(newUser: User) : Promise<boolean> {
    return this.getAll().then((users: User[]) => {
      let matches: User[] = users.filter((user: User) =>
        (user.emailAddress === newUser.emailAddress &&
        user.name === newUser.name)
      );
      return (matches.length > 0);
    });
  }
  public registerNew(user: User) : Promise<User> {
    return this.isAlreadyRegistered(user).then((res: boolean) => {
      if (res) {
        throw new Error('The information provided is already associated to an ' +
          'existing account');
      }
      else {
        return this.post(user);
      }
    });
  }
}
