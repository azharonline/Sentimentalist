import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss'],
})
export class ResultPageComponent implements OnInit {
  sliderVal: number = 0;
  resultAvailable: boolean = false;
  disabled: boolean = true;
  sentiVal: number = 5;
  emotion: string = '';
  response = {
    emotion: 'Meh',
    magnitude: 0,
    score: 0,
    sentiment: 'Neutral',
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      // let incomingData = JSON.parse(params['response']);
      // console.log('API response: ', incomingData);
      console.log('API response: ', history.state);
    });

    console.log('API response: ', history.state);
    this.response = history.state.response;
    console.log('Score -> ', this.response.score);
    this.response.score = this.response.score + 1;
    this.response.score = this.response.score * 100;
    this.response.score = this.response.score + 1;
    console.log('this.sentiVal: ', this.sentiVal);
    this.sentiVal = this.response.score;
    this.emotion = this.response.emotion;

    setTimeout(() => {
      this.sliderVal = 10;
      this.resultAvailable = true;
    }, 5000);
  }
}
