import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

    constructor() { }
    getData() { 
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('app title');
            },3000)
        });
    }
}