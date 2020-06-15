import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor(private router: Router, private http: HttpClient) {
  }

  createUser(user) {
    return this.http.post(`${environment.api}/auth`, user);
  }
  getUsers() {
    return this.http.get(`${environment.api}/auth`);
  }
}
