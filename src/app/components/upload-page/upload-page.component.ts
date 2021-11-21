import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoutingService } from '../../services/routing-services/routing-service.service';
import { FileUploadService } from 'src/app/services/data-services/file-upload.service';

@Component({
  selector: 'app-upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.scss'],
})
export class UploadPageComponent implements OnInit {
  // state$: Observable<object> = new Observable;
  selectedOption: String = '';
  files: any[] = [];
  fileToUpload: any = null;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private routingDataService: RoutingService,
    private fileUploadService: FileUploadService
  ) {
    // this.selectedOption = this.routingDataService.selectedUploadOption;
  }

  ngOnInit(): void {
    // this.state$ = this.activatedRoute.paramMap
    //   .pipe(map(() => window.history.state))
    // console.log("Upload Page -- ", this.state$);
    // console.log("State is -- ", window.history.state);
    // console.log("Upload page -- Option selected -- ", this.selectedOption);
  }

  /**
   * handle file from browsing
   */
  //  fileBrowserHandler(files: any) {
  //   this.fileToUpload = files.item(0);
  //   this.prepareFilesList(this.fileToUpload);
  // }
  fileBrowserHandler(event: any): void {
    // alert('fileBrowserHandler');
    this.fileToUpload = event?.target?.files ? event.target.files : null;
    if (this.fileToUpload) {
      this.prepareFilesList(this.fileToUpload[0]);
    }
  }

  /**
   * on file drop handler
   */
  onFileDropped(event: any) {
    // alert('onFileDropped');
    this.fileToUpload = event ? event[0] : null;
    if (this.fileToUpload) {
      this.prepareFilesList(this.fileToUpload);
    }
  }

  /**
   * Delete file from files list
   * @param index (File index)
   */
  deleteFile(index: number) {
    this.files.splice(index, 1);
  }

  /**
   * Simulate the upload process
   */
  uploadFilesSimulator(index: number) {
    setTimeout(() => {
      if (index === this.files.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.files[index].progress === 100) {
            clearInterval(progressInterval);
            this.uploadFilesSimulator(index + 1);
          } else {
            this.files[index].progress += 5;
          }
        }, 200);
      }
    }, 1000);
  }

  /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */
  prepareFilesList(uploadFile: File) {
    // for (const item of files) {
    //   item.progress = 0;
    //   this.files.push(item);
    // }
    // this.uploadFilesSimulator(0);
    console.log('File that has been uploaded is -- ', uploadFile);
    // this.fileUploadService.postFile(uploadFile).subscribe(
    //   (data) => {
    //     // do something, if upload success
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
    this.router.navigate(['/result']);
  }

  /**
   * format bytes
   * @param bytes (File size in bytes)
   * @param decimals (Decimals point)
   */
  formatBytes(bytes: any, decimals?: any) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  switchToText() {
    this.router.navigate(['/text']);
  }
}
