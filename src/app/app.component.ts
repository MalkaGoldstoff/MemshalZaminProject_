import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';

  // @Input()
  // id:number=1;
  
}
// import {Component, Injectable} from '@angular/core';
// import {Subject} from 'rxjs';

// // DATA SERVICE
// @Injectable({providedIn: 'root'})
// export class DataService {
//   data$: Subject<number> = new Subject();

//   update() {
//     this.data$.next(Math.random());
//   }
// }

// // ==================================================
// // COMPONENTE PRODUCER
// @Component({
//   selector: 'app-producer',
//   template: `
//     <h3>Producer Component</h3>
//     <button (click)="dataService.update()">
//       Generate Number
//     </button>
//   `
// })
// export class ProducerComponent {
//   constructor(public dataService: DataService) {
//   }
// }

// // ==================================================
// // COMPONENTE CONSUMER
// @Component({
//   selector: 'app-consumer',
//   template: `
//     <h3>Consumer Component: </h3>
//     <div>{{dataService.data$ | async}}</div>
//   `
// })
// export class ConsumerComponent {
//   constructor(public dataService: DataService) { 
//     dataService.data$.subscribe(
//       res => console.log(res)
//     )
//   }
// }

// // ==================================================
// // COMPONENTE ROOT
// @Component({
//   selector: 'my-app',
//   template: `
//     <h1>RxJS - Share Data with Subject</h1>
//     <hr />
//     <app-producer></app-producer>
//     <hr />
//     <app-consumer></app-consumer>
//   `
// })
// export class AppComponent {}