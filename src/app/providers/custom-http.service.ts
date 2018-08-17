import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { BASEURL } from './app.constants';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';



@Injectable()
export class CustomHttpService {
    constructor(private httpClient: HttpClient) { }

    private getAccessToken() {

        let basicToken = "nxtlifecustomersupport:suvidha";

        return localStorage.getItem('access_token') ? 'Bearer ' + localStorage.getItem('access_token') : 'Basic ' + btoa(basicToken);
    }

    private addHeaders(optionalHeaders?: HttpHeaders) {

        let requestHeaders = new HttpHeaders()
            .set('Authorization', this.getAccessToken()).set("isWeb", "true");

        if (optionalHeaders) {
            for (const header of optionalHeaders.keys()) {
                requestHeaders = requestHeaders.append(header, optionalHeaders.get(header));
            }
        }
        return requestHeaders;
    }


    get(url: string, options?: HttpHeaders) {

        const headers = this.addHeaders(options);

        return this.httpClient.get(BASEURL + url, { headers: headers, observe: 'response' })
            .map(this.extractData)
            .catch(this.handleError);
    }

    post(url: string, body: any, options?: HttpHeaders) {

        const headers = this.addHeaders(options);

        return this.httpClient.post(BASEURL + url, body, { headers: headers, observe: 'response' })
            .map(this.extractData)
            .catch(this.handleError);
    }

    postForRegister(url: string, body: any) {
        // no header is required for register 
        return this.httpClient.post(BASEURL + url, body, { observe: 'response' })
            .map(this.extractData)
            .catch(this.handleError);
    }

    put(url: string, body: any, options?: HttpHeaders) {

        const headers = this.addHeaders(options);

        return this.httpClient.put(BASEURL + url, body, { headers: headers, observe: 'response' })
            .map(this.extractData)
            .catch(this.handleError);
    }


    private extractData(res: HttpResponse<any>) {

        // console.log('inside extract data', res);
        return res.body || res.status;
    }

    private handleError(err: HttpErrorResponse) {
        console.log('inside custom http', err);
        let errorInfo: any = {};

     
        console.log(err instanceof Error);
        
        if (err instanceof Error || err.error instanceof ProgressEvent) {
            /**A client-side or network error occurred. Handle it accordingly.*/
            // console.log('An error occurred:', );'
            errorInfo.status = err.status;
            errorInfo.status == 0 ? errorInfo.msg = "No Internet, Check Your connection Or Try again" : errorInfo.msg = err.message || 'Some Error Occured';
        }
        else {
            /**The backend returned an unsuccessful response code.*/
            // console.log('Server occurred:', error);

            errorInfo.status = err.status;


            if (err.status === 403) {
                // unauthorized users
               errorInfo.msg= " unauthorized users " + err.error.error_description
                // alert(" unauthorized users " + err.error.error_description)
              } else if (err.status === 401) {
                // access rights issue
                localStorage.clear();
                alert(" unauthorized access")
              } else if (err.status === 400) {
                // DO NOTHING HERE
                // Bad Login credentials, this error has been handled at the login page itself, 
                // hence ignored here
                errorInfo.msg="wrong Login credentials please try again"
              } else if (err.status === 502) {
                // server issue
                errorInfo.msg="Server Issue";
        
              } else if (err.status === 404) {
                // server issue
                errorInfo.msg=err.message;
              }else if (err.hasOwnProperty('error') && (err.error.hasOwnProperty('message')) || err.error.hasOwnProperty('error')) {
                    errorInfo.msg=`${err.error.message || err.error.error} `;
                }







        }
        return Observable.throw(errorInfo);

    }

}
