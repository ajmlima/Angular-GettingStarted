import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;

    @Output() ratingOut: EventEmitter<number> = new EventEmitter<number>();
                
    constructor() {}

    retrieveRating() {
        this.ratingOut.emit(this.rating);
    }

    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }
}
