import { HttpTestingController } from '@angular/common/http/testing/';
import { HttpClientTestingModule } from '@angular/common/http/testing/';
import { JediService } from './jedi-service';
import { MockBackend } from '@angular/http/testing';
import { HttpModule, ResponseOptions, XHRBackend } from '@angular/http';

import { TestBed } from "@angular/core/testing";
import { inject } from "@angular/core/testing";

describe('a jedi service', () => {
    beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [JediService]
  }));

  it('should list the users', () => {
    const jediService = TestBed.get(JediService);
    const http = TestBed.get(HttpTestingController);
    // fake response
    const expected = [{ name: 'Luke' }, { name: 'Darth Vader' }];

    let actual = [];

    jediService.getJedis().subscribe( data => {
      actual = data;
    });

    http.expectOne('/api/jedis').flush(expected);

    expect(actual).toEqual(expected);
  });
});