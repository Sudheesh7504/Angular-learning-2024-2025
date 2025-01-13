import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  mobiles = ['one plus', 'iphone', 'redmi', 'realme'];
  constructor(private httpClient: HttpClient) { }

}
