import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-app-product-item',
    templateUrl: './app-product-item.component.html',
    styleUrls: ['./app-product-item.component.css']
})
export class AppProductItemComponent implements OnInit {
    @Input() product;
    @Output() shareEvent = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    share(productId) {
        this.shareEvent.emit(productId);
    }

}
