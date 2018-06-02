import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngxInit]',
})
export class NgxInitDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) {
  }

  @Input() set ngInit(val: any) {
    this.viewContainer.createEmbeddedView(this.templateRef, {$implicit: val});
  }
}