# NgxInit

Angular.js' [ng-init directive](https://docs.angularjs.org/api/ng/directive/ngInit) for Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.7.

## usage 

The usage involves some boilerplate, but that's the best Angular currently has to offer

0) import `NgxInitModule`  
0) a value expression is set via `[ngxInit]` on an `ng-template` and published into a variable name via `let-<you-var-name>`

## Examples

### simple

```
<ng-template [ngxInit]="3 * i + j" let-idx>
  <div>{{idx}}</div>
</ng-template>
```
       
### inside ngFor
in the simple case this just could be used inside `ngFor`

```
<div *ngFor="let i of [0, 1, 2]" (click)="onClick()"> <!-- can't use 'sqr' here -->
  <ng-template [ngxInit]="i * i" let-sqr>
    {{sqr}}
  </ng-template>
</div>
```

but if the computed value needs to be used on the top `ngFor` element you got to use the explicit `ngForOf`:

```
<ng-template ngFor let-i [ngForOf]="[0, 1, 2]">
  <ng-template [ngxInit]="i * i" let-sqr>
    <div (click)="onClick(sqr)">{{sqr}}</div>  <!-- 'sqr' is available on top element -->
  </ng-template>
</ng-template>
```
