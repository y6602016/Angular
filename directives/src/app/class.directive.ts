import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {
  constructor(private el: ElementRef) { }

  // setter is a function taking calssName as an argument to bind the property to the directive
  @Input('appClass') set classnames(classObj: any) {
    for (let key in classObj) {
      if (classObj[key]) {
        this.el.nativeElement.classList.add(key);
      }
      else{
        this.el.nativeElement.classList.remove(key);
      }
    }
  }
}
