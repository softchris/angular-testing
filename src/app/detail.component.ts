import { Observable } from 'rxjs/Rx';
import { Jedi } from './jedi.model';
import { JediService } from './jedi-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'detail-component',
    template : ``
})

export class DetailComponent implements OnInit {
    jedi;
    constructor( 
        private route: ActivatedRoute,
        private jediService : JediService
    ) { 
        route.paramMap.subscribe( p => {
            let id = p.get('id');
            console.log('service id', id);
            jediService.getJedi( id ).subscribe( data => {
                this.jedi = data
            });
        })
    }

    ngOnInit() { }
}