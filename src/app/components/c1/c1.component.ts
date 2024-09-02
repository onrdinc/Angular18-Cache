import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-c1',
  standalone: true,
  imports: [],
  templateUrl: './c1.component.html',
  styleUrl: './c1.component.css'
})
export class C1Component {
  constructor(
    private _http: HttpClient
  ) { }

  ngOnInit(): void {
    this.get();
  }

  get() {
    let api = "apiUrl";
    this._http.get<any>(api).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err)
    })
  }
}
