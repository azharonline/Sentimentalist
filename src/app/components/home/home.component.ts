import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingService } from '../../services/routing-services/routing-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private routingDataService: RoutingService) { }

  ngOnInit(): void {
  }

  selection(option: String){
    switch(option){
      case 'audio':
        console.log("Selected option is audio");
        this.routingDataService.selectedUploadOption = option;
        this.router.navigate(['/upload']);
        break;
      case 'video':
        console.log("Selected option is video");
        this.routingDataService.selectedUploadOption = option;
        this.router.navigate(['/upload']);
        break;
      case 'pdf':
        console.log("Selected option is PDF");
        this.routingDataService.selectedUploadOption = option;
        this.router.navigate(['/upload']);
        break;
      case 'text':
        console.log("Selected option is text");
        this.routingDataService.selectedUploadOption = option;
        this.router.navigate(['/text']);
        break;
    }
  }

}
