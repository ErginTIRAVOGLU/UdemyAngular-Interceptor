import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'interceptor';
  constructor(private _http: HttpClient) {}

  getApi() {
    /*
    this._http
      .get('https://jsonplaceholder.typicode.com/todos')
      .subscribe((res) => {
        console.log(res);
      });
    */
    /*
    this._http.get('https://jsonplaceholder.typicode.com/todos').subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      },
    });
    */
    this._http
      .get('https://jsonplaceholder.typicode.com/todos')
      .subscribe((res) => {
        console.log(res);
      });
  }
}
