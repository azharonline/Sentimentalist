import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss'],
})
export class ResultPageComponent implements OnInit {
  sliderVal: number = 0;
  resultAvailable: boolean = false;
  disabled: boolean = true;
  sentiVal: number = 55;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.sliderVal = 10;
      this.resultAvailable = true;
    }, 5000);
  }
}
