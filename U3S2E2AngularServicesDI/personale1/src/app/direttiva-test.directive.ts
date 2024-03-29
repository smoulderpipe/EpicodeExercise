import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirettivaTest]'
})
export class DirettivaTestDirective {

  constructor(private target: ElementRef) {
    this.target.nativeElement.style = "color: red"
   }

}
