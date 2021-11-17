import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'saqiaaa';
  totalItems = 64;
  currentPage = 4;
 
  setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }
}
