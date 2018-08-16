import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { BASEURL } from './app.constants';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



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
        // console.log('inside handle error', error);
        let errorInfo: any = {};

        // if (err instanceof HttpErrorResponse) {
        //     console.log("im in the error handler")
        //          if (err.status === 403) {
        //            // unauthorized users
        //            alert(" unauthorized users " + err.error.error_description)
        //          } else if (err.status === 401) {
        //            // access rights issue
        //            localStorage.clear();
        //            alert(" unauthorized access")
        //          } else if (err.status === 400) {
        //            // DO NOTHING HERE
        //            // Bad Login credentials, this error has been handled at the login page itself, 
        //            // hence ignored here
        //            alert("wrong Login credentials please try again")
        //          } else if (err.status === 502) {
        //            // server issue
        //            alert("Server Issue");
           
        //          } else if (err.status === 404) {
        //            // server issue
        //            alert(err.message);
        //          } else if (err.status === 0) {
        //            // No Internet cases(Most of the times)
        //            alert("Ineternet not working")
        //          } else {
           
        //            if (err.hasOwnProperty('error') && (err.error.hasOwnProperty('message')) || err.error.hasOwnProperty('error')) {
        //              alert(`${err.error.message || err.error.error} hvugjv`);
        //            } else {
        //              alert("Unknown Error Some unexpected error occured.");
        //            }
        //          }
        //        }
           
        //        //Backend returns unsuccessful response codes such as 404, 500 etc.				  
           
        //        else {
        //          alert(JSON.stringify(error.error_description));
        //          console.log("error hendler")
        //        }
           
           
        //      }
        if (err instanceof Error || err.error instanceof ProgressEvent) {
            /**A client-side or network error occurred. Handle it accordingly.*/
            // console.log('An error occurred:', );
            errorInfo.status = err.status;
            errorInfo.status == 0 ? errorInfo.msg = "No Internet, Check Your connection Or Try again" : errorInfo.msg = err.message || 'Some Error Occured';
        }
        else {
            /**The backend returned an unsuccessful response code.*/
            // console.log('Server occurred:', error);
            errorInfo.status = err.status;
            errorInfo.msg = err.error.message || err.error.error || 'Internal Server Error';
        }
        return Observable.throw(errorInfo);

    }

}
