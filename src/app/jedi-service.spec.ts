import { JediService } from './jedi-service';
import { MockBackend } from '@angular/http/testing';
import { HttpModule, ResponseOptions, XHRBackend } from '@angular/http';

import { TestBed } from "@angular/core/testing";
import { inject } from "@angular/core/testing";

describe('a jedi service', () => {
    let fixture;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports : [ HttpModule ],
            providers : [
                { provide: XHRBackend, useClass : MockBackend  },
                JediService
            ]
        })
    })

    fit('can get data', inject([JediService, XHRBackend], (jediService, mockBackend) => {
        const mockedResponse = {
          data: [
            { "name": "Luke" },
            { "name": "Darth Vader" }
          ]
        };

        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify( mockedResponse)
          })));
        });

        jediService.getJedis().subscribe( jedis => {
             expect(jedis[0].name).toBe('Luke');
            expect(jedis[0].name).toBe('Luke');
        })
    }));
});