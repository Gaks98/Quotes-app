import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) { }

  @HostListener("click") onClicks(){
    this.textDeco("red")
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco("none")
  }

  private textDeco(action: string){
    this.elem.nativeElement.style.background = action;
  }
}
