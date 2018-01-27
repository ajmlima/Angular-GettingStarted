import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;

    @Output() ratingOut: EventEmitter<string> = new EventEmitter<string>();
                
    constructor() {}

    retrieveRating() {
        var message = "Stars rating clicked: " + this.rating;
        this.ratingOut.emit(message);
    }

    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }
}
