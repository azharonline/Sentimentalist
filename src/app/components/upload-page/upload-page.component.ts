import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoutingService } from '../../services/routing-services/routing-service.service';
import { FileUploadService } from 'src/app/services/data-services/file-upload.service';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';

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
    // Get a reference to the storage service, which is used to create references in your storage bucket
    // const storage = getStorage();
    // Create a storage reference from our storage service
    // const storageRef = ref(storage);
  }

  ngOnInit(): void {}

  fileBrowserHandler(event: any): void {
    this.fileToUpload = event?.target?.files ? event.target.files : null;
    if (this.fileToUpload) {
      this.prepareFilesList(this.fileToUpload[0]);
    }
  }

  /**
   * on file drop handler
   */
  onFileDropped(event: any) {
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
  // uploadFilesSimulator(index: number) {
  //   setTimeout(() => {
  //     if (index === this.files.length) {
  //       return;
  //     } else {
  //       const progressInterval = setInterval(() => {
  //         if (this.files[index].progress === 100) {
  //           clearInterval(progressInterval);
  //           this.uploadFilesSimulator(index + 1);
  //         } else {
  //           this.files[index].progress += 5;
  //         }
  //       }, 200);
  //     }
  //   }, 1000);
  // }

  /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */
  prepareFilesList(uploadFile: File) {
    console.log('File that has been uploaded is -- ', uploadFile);
    this.uploadToCloud('type', uploadFile);
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

  // /**
  //  * format bytes
  //  * @param bytes (File size in bytes)
  //  * @param decimals (Decimals point)
  //  */
  // formatBytes(bytes: any, decimals?: any) {
  //   if (bytes === 0) {
  //     return '0 Bytes';
  //   }
  //   const k = 1024;
  //   const dm = decimals <= 0 ? 0 : decimals || 2;
  //   const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  //   const i = Math.floor(Math.log(bytes) / Math.log(k));
  //   return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  // }

  uploadToCloud(type: string, file: File) {
    const storage = getStorage();
    // Create the file metadata
    /** @type {any} */
    const metadata = {
      contentType: type,
    };

    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(storage, file.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            console.log('storage/unauthorized');
            break;
          case 'storage/canceled':
            console.log('storage/canceled');
            break;

          // ...

          case 'storage/unknown':
            console.log('storage/unknown');
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
        });
      }
    );
  }

  switchToText() {
    this.router.navigate(['/text']);
  }
}
