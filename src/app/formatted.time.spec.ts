import { forEach } from '@angular/router/src/utils/collection';
import { FormattedPipe } from './formatted.pipe';
import { TestBed } from '@angular/core/testing';

describe('Formatted time pipe', () => {
    let fixture;
    beforeEach(() => {
        fixture = new FormattedPipe();
    })

    it('has transform', () => {
        expect(fixture.transform).toBeTruthy();
    })

    it('transform produces expected results', () => {
        expect(fixture.transform('time')).toBe('bananatime');
    });
    
});