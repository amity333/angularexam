import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  allColors = [ 'darkredblue','hotpink','lightskyblue','goldenrod','green','red','sunfloweryellow' ];

  constructor() { }

  @HostBinding('style.color')color:string;
  @HostBinding('style.border-color') borderColor: string;
  @HostListener('keydown') newColor() {
    const mycolor = Math.floor(Math.random()*this.allColors.length);
    this.color = this.borderColor = this.allColors[mycolor];
  }

}
