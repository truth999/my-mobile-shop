import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    constructor() {
    }

    static getProducts() {
      return [
        {
          id: 1,
          name: "Phone XL",
          desc: "A large phone with one of the best screens"
        },
        {
          id: 2,
          name: "Phone Mini",
          desc: "A medium sized phone with one of the best camera"
        },
        {
          id: 3,
          name: "Phone Standards",
          desc: "A phone with a perfect blend of camera and screen"
        }
      ];
    }
}
