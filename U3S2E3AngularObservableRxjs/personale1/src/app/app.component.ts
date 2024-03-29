import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'personale1';

  myObservable = new Observable((observer) => {
    console.log('Observable starts')
    setTimeout(() => {observer.next("1")}, 1000)
    setTimeout(() => {observer.next("2")}, 2000)
    setTimeout(() => {observer.next("3")}, 3000)
    // setTimeout(() => {observer.error(new Error('Something went wrong'))}, 3500)
    setTimeout(() => {observer.next("4")}, 4000)
    setTimeout(() => {observer.next("5")}, 5000)
    setTimeout(() => {observer.complete()}, 3000)

    // observer.next("1")
    // observer.next("2")
    // observer.next("3")
    // observer.next("4")
    // observer.next("5")
  });

  array1 = [1, 2, 4, 7, 11];
  myObservable2 = from(this.array1);
  transformObs = this.myObservable2.pipe(map
    (
      (val => { return val * 5;})
    ));

  filterObs = this.transformObs.pipe(filter((val) => {
    return val >= 30
  }));

  ngOnInit(){
    // this.myObservable.subscribe((val) => {
    //   console.log(val);
    // }, (error) => {
    //   alert(error.message);
    // }, () => {
    //   alert("Observable has complete emitting all values");
    // });

    this.transformObs.subscribe((val) => {
      console.log(val);
    })
    this.filterObs.subscribe((val) => {
      console.log(val);
    })
  }
}
