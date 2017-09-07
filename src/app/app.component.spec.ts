import { Injectable } from '@angular/core';
import { AppService } from './app.service';
import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { fakeAsync } from "@angular/core/testing";
import { tick } from "@angular/core/testing";

@Injectable()
class AppServiceStub {
  getData() {
    return 'stub';
  }
}

describe('AppComponent', () => {
  var fixture;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers : [ AppService ]
      //providers : [
      //  {provide: AppService, useClass: AppServiceStub }
      //]
    }).compileComponents();

    fixture = TestBed.createComponent( AppComponent );
    var appService = fixture.debugElement.injector.get(AppService);
    spyOn(appService, 'getData').and.returnValue(Promise.resolve('spy value2'));

  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'spy value2'`, fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    tick();
   
    fixture.detectChanges();
    expect(app.title).toEqual('spy value2');
    expect(app.description).toEqual('description');
    
    
    
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(compiled.querySelector('h1').textContent).toContain('spy value');
    })
    
  }));
});
