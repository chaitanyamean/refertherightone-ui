import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000';

  getAllTags() {
    const response = this.http.get(`${this.url}/common/getAllTags`);
    return response;
  } // end of AllTags

  postJob(jobDetails) {
    const response = this.http.post(`${this.url}/jobs/addjobs`, jobDetails);
    return response;
  }
}
