import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';


@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss']
})
export class TripsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  value_2: number = 1;
  highValue_2: number = 7;
  options_2: Options = {
    floor: 1,
    ceil: 10,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return value + ' Tag';
        case LabelType.High:
          return value + ' Tage';
        default:
          return value + ' Tage';
      }
    }
    
  };

  value: number = 1;
  highValue: number = 1074;
  options: Options = {
    floor: 1,
    ceil: 2000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return value + ' €';
        case LabelType.High:
          return value + ' €';
        default:
          return value + ' €';
      }
    }
  };


}
