import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  constructor(private httpClient: HttpClient) {}

  postFile(gsUri: string, inputType: string): Observable<Object> {
    const endpoint = 'http://54.159.168.182:8080/sentiment';
    let headers = new HttpHeaders();
    // header.set('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Origin', '*');
    const headersConfig = {
      // Authorization: 'Bearer my-token',
      // 'My-Custom-Header': 'foobar',
      'Access-Control-Allow-Origin': '*',
    };
    // const formData: FormData = new FormData();
    // formData.append('fileKey', fileToUpload, fileToUpload.name);
    let body = {
      url: gsUri,
      input_type: inputType,
    };
    return this.httpClient.post(endpoint, body, { headers: headers });
    // .pipe(
    //   catchError((e) => this.handleError(e))
    //   );
    // .map(() => { return true; })
    // .catch((e) => this.handleError(e));
  }
}
