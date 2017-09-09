import { Jedi } from './jedi.model';
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
