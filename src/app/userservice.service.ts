import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) { }

    url = 'http://localhost:3000';

    login(user) {
      const response = this.http.post(`${this.url}/user/login`, user);
      return response;
    } // end of login

}
