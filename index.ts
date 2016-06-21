import {Directive, ElementRef} from '@angular/core';

@Directive({
    selector: '[nano]',
    host: {'class': 'nano'}
})
export class NanoScroller {
    constructor($element:ElementRef) {
        setTimeout(() => jQuery($element.nativeElement)['nanoScroller'](), 200);
    }
}

@Directive({
    selector: '[nanoContent]',
    host: {'class': 'nano-content'}
})
export class NanoScrollerContent {
    constructor() {
    }
}

export const NANO_SCROLLER = [NanoScroller, NanoScrollerContent];
