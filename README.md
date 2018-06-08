# NgxInit

Angular.js' [ng-init directive](https://docs.angularjs.org/api/ng/directive/ngInit) for Angular2+

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.7.

## usage 

The usage involves some boilerplate, but that's the best Angular currently has to offer

0) import `NgxInitModule`  
0) a value expression is set via `[ngxInit]` on an `ng-template` and published into a variable name via `let-<you-var-name>=ngxInit`

## Examples

### simple

the following are equivalent (assuming `i` and `j` are defined in the context):

```html
<div *ngxInit="3 * i + j as idx">{{idx}}</div>
```

```html
<ng-container *nxgInit="3 * i + j as idx">
  <dt>{{idx}}</dt>
  <dd>this is the {{idx}} index</dd>
</ng-container>
```

```html
<ng-template [ngxInit]="3 * i + j" let-idx="ngxInit">
  <dt>{{idx}}</dt>
  <dd>this is the {{idx}} index</dd>
</ng-template>
```
       
### inside ngFor
In the simple case, this directive cannot be used inside `ngFor` because in angular we can't have multiple template bindings on one element.
In order to bypass this limitation we can use either `ng-container` or `ng-template`

```html
<!-- Error: can't have multiple template bindings on one element -->
<div *ngFor="let i of [0, 1, 2]" *nxgInit="i * i as sqr" (click)="onClick(sqr)">
  {{sqr}}
</div>
```

Workarounds:

```html
<ng-container *ngFor="let i of [0, 1, 2]">
  <div *ngxInit="i * i as sqr" (click)="onClick(sqr)">{{sqr}}</div>
</ng-container>
```

```html
<ng-template ngFor let-i [ngForOf]="[0, 1, 2]">
  <div *ngxInit="i * i as sqr" (click)="onClick(sqr)">{{sqr}}</div>
</ng-template>
```
