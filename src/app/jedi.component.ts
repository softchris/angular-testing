import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'jedi',
    template : `
    <div class="hero" (click)="select.emit(jedi)" *ngIf="jedi">{{ jedi.name }}</div>
    `
})

export class JediComponent implements OnInit {
    @Input() jedi;
    @Output() select = new EventEmitter<Jedi>();
    constructor() { }

    ngOnInit() { }
}

export class Jedi {
    constructor(public name: string, public side: string) {}
}