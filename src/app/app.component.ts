import { AfterViewInit, Component } from '@angular/core';
import { Inventor } from './common/inventor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit{
  title = 'lab1';

  inventors: Inventor[] = [
    {id: 1, first: 'Einstein', last: 'Vu', year: 1879, passed: 1955},
    {id: 2, first: 'Einstein', last: 'Vu', year: 1879, passed: 1998},
    {id: 3, first: 'Einstein', last: 'Vu', year: 1879, passed: 1955},
  ]
  ngAfterViewInit(): void {
    this.render(this.show)
  }

  show(innerHTML: string) {
    let item = document.querySelector('#list');

    if (item) {
      item.innerHTML = innerHTML;
    }
  }

  render(callback: (data: string) => any) {
    let innerHTML = this.inventors.map(item=>{
      return `
        <tr>
        <td>${item.id}</td>
        <td>${item.first}</td>
        <td>${item.last}</td>
        <td>${item.year}</td>
        <td>${item.passed}</td>
        </tr>
      `;
    }).join('');
    callback(innerHTML);
  }
}
