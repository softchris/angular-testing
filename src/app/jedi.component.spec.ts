import { By } from '@angular/platform-browser';
import { ComponentFixture } from '@angular/core/testing/src/testing';
import { Jedi, JediComponent } from './jedi.component';
import { TestBed, async } from '@angular/core/testing';

describe('jedi component', () => {
    var fixture:ComponentFixture<JediComponent>;
    var component;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations : [ JediComponent ]
        }).compileComponents();
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(JediComponent);
        component = fixture.debugElement.componentInstance;
        component.jedi = new Jedi('Luke', 'Light');
        fixture.detectChanges();
    })

    it('test input',() => {
        expect(component.jedi.name).toBe('Luke');
    })

    it('verify output', () => {
        let selectedJedi;
        component.select.subscribe( data => {
            selectedJedi = data;
        });
        
        var elem = fixture.debugElement.query(By.css('.hero'));
        elem.triggerEventHandler('click', null)

        expect(selectedJedi.name).toBe('Luke');
    })
})