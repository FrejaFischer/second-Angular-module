import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FetchDogService {
  constructor(private http: HttpClient) {}

  async fetchData() {
    const res = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await res.json();
    // console.log(data.message);
    return data.message;
  }
}
