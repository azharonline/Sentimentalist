import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-text-analyzer',
  templateUrl: './text-analyzer.component.html',
  styleUrls: ['./text-analyzer.component.scss'],
})
export class TextAnalyzerComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  submitBtn(textVal: any) {
    console.log(textVal);
    this.router.navigate(['/result']);
  }
}
