import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-figlio3',
  templateUrl: './figlio3.component.html',
  styleUrls: ['./figlio3.component.scss']
})
export class Figlio3Component implements OnInit, AfterContentChecked, AfterContentInit, AfterViewInit, DoCheck, OnDestroy {

  constructor() {
    console.log("costruttore")
  }
  ngDoCheck(): void {
    console.log("ngDoCheck");
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }

  ngOnInit(): void {
    console.log('ngOnInit')
  }
}
