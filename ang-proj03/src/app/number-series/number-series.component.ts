import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { NumberSeriesService } from '../services/number-series.service';

@Component({
  selector: 'app-number-series',
  templateUrl: './number-series.component.html',
  styleUrls: ['./number-series.component.css']
})
export class NumberSeriesComponent {

  lb: number;
  ub: number;
  evens: boolean;
  squares: boolean;

  err?: string;
  results?: number[];

  isJobInProgress?: boolean;

  constructor(private nss: NumberSeriesService) {
    this.lb = 0;
    this.ub = 0;
    this.evens = false;
    this.squares = false;
  }

  startSeries() {
    this.isJobInProgress = true;
    this.results = [];
    this.err = undefined;

    let ob: Observable<number>;

    if (this.evens && this.squares)
      ob = this.nss.generateEvenSquaredSeries(this.lb, this.ub);
    else if (this.evens)
      ob = this.nss.generateEvenSeries(this.lb, this.ub);
    else if (this.squares)
      ob = this.nss.generateSquaredSeries(this.lb, this.ub);
    else
      ob = this.nss.generateSeries(this.lb, this.ub);

    ob.subscribe(
      v => this.results?.push(v),
      err => { this.err = err; this.isJobInProgress = false; },
      () => this.isJobInProgress = false
    );
  }
}
