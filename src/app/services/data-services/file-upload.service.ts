import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private httpClient: HttpClient) { }

  postFile(fileToUpload: File): Observable<Object> {
    const endpoint = 'mockUrl';
    const headersConfig = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    return this.httpClient
      .post(endpoint, formData, { headers: headersConfig });
      // .pipe(
      //   catchError((e) => this.handleError(e))
      //   );
      // .map(() => { return true; })
      // .catch((e) => this.handleError(e));
  }

}
