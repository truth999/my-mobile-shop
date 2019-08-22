import {Component, OnInit} from '@angular/core';
import {AppService} from "../app.service";

@Component({
    selector: 'app-app-product-list',
    templateUrl: './app-product-list.component.html',
    styleUrls: ['./app-product-list.component.css']
})
export class AppProductListComponent implements OnInit {

    private productList;

    constructor(private appService: AppService) {
    }

    ngOnInit() {
        this.productList = AppService.getProducts();
    }

    shareEvent(productId) {
      alert("Event is now getting shared by product "+productId );
    }


}
