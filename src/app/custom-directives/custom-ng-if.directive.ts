import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomNgIf]'
})
export class CustomNgIfDirective {

  constructor(private html: TemplateRef<any>, private container: ViewContainerRef) { }

  @Input() set appCustomNgIf(cond: boolean) {
    if (cond) {
      this.container.createEmbeddedView(this.html);
    } else {
      this.container.clear();
    }
  }


}
