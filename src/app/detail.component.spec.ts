import { JediService } from './jedi-service';
import { DetailComponent } from './detail.component';
import { Subject } from 'rxjs/Rx';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HttpTestingController } from "@angular/common/http/testing";

class ActivatedRouteStub {
    _subject: Subject<any>;

    constructor() {
        this._subject = new Subject();
    }

    sendParameters(params: {}) {
        var paramMap = convertToParamMap(params);
        console.log('id',paramMap.get('id'));
        this._subject.next( paramMap );
    }

    get paramMap() {
        return this._subject.asObservable();
    }
}


describe('A detail component', () => {
    var stub;
    var fixture;
    var component;

    beforeEach(async() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule ],
            declarations : [ DetailComponent ],
            providers : [{
                provide : ActivatedRoute, useClass : ActivatedRouteStub
            }, JediService]
        })
    })

    beforeEach(() => {
        fixture = TestBed.createComponent(DetailComponent);
        component = fixture.debugElement.componentInstance;
        stub = TestBed.get(ActivatedRoute);  
    })

    fit('test id is being emitted and data is being set', async() => {
        stub.paramMap.subscribe((para) => {
            let id = para.get('id');
            expect(id).toBe(1);
        });

        stub.sendParameters({ id : 1 });

        const jediService = TestBed.get(JediService);
        

        const http = TestBed.get(HttpTestingController);
        // fake response
        const expected = { name: 'Luke', id: 1 };

        let actual = {};

        http.expectOne('/api/jedis/1').flush(expected);

        fixture.detectChanges();

        fixture.whenStable().then( () => {
            expect(component.jedi.name).toBe('Luke');
        })
    })
})