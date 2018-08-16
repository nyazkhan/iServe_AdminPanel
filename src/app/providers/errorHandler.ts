// import { Injectable, Injector, ErrorHandler } from '@angular/core';
// import { HttpErrorResponse } from '@angular/common/http';
// import { Router } from '@angular/router';





// @Injectable()
// export class GlobalErrorHandlerService implements ErrorHandler {

//   constructor(private injector: Injector) { }





//   handleError(error: any) {

//     let router = this.injector.get(Router);
//     // console.log('URL: ' + router.url);

//     if (error instanceof HttpErrorResponse) {
//  console.log("im in the error handler")
//       if (error.status === 403) {
//         // unauthorized users
//         alert(" unauthorized users " + error.error.error_description)
//       } else if (error.status === 401) {
//         // access rights issue
//         localStorage.clear();
//         alert(" unauthorized access")
//       } else if (error.status === 400) {
//         // DO NOTHING HERE
//         // Bad Login credentials, this error has been handled at the login page itself, 
//         // hence ignored here
//         alert("wrong Login credentials please try again")
//       } else if (error.status === 502) {
//         // server issue
//         alert("Server Issue");

//       } else if (error.status === 404) {
//         // server issue
//         alert(error.message);
//       } else if (error.status === 0) {
//         // No Internet cases(Most of the times)
//         alert("Ineternet not working")
//       } else {

//         if (error.hasOwnProperty('error') && (error.error.hasOwnProperty('message')) || error.error.hasOwnProperty('error')) {
//           alert(`${error.error.message || error.error.error} hvugjv`);
//         } else {
//           alert("Unknown Error Some unexpected error occured.");
//         }
//       }
//     }

//     //Backend returns unsuccessful response codes such as 404, 500 etc.				  

//     else {
//       alert(JSON.stringify(error.error_description));
//       console.log("error hendler")
//     }


//   }
// }





// // if (error instanceof HttpErrorResponse) {
// //   if (error.status === 403) {
// //     // unauthorized users
// //     // this.logout(error);
// //     alert(" unauthorized users "+error.error.error_description)
// //   } else if (error.status === 401) {
// //     // access rights issue
// //     localStorage.clear();
// //     this.router.navigate(['/login']);
// //     alert(" unauthorized access")
// //   } else if (error.status === 400) {
// //     // DO NOTHING HERE
// //     // Bad Login credentials, this error has been handled at the login page itself, 
// //     // hence ignored here
// //     alert("Bad Login credentials")
// //   } else if (error.status === 502) {
// //     // server issue
// //     alert("Server Issue");
// //   } else if (error.status === 0) {
// //     // No Internet cases(Most of the times)
// //     alert("Ineternet not working")

// //   } else {

// //     // if (error.hasOwnProperty('error') && (error.error.hasOwnProperty('message')) || error.error.hasOwnProperty('error')) {
// //     //   alert(`${error.error.message || error.error.error}`);
// //     // } else {
// //     //   alert("Unknown Error Some unexpected error occured.");
// //     // }
// //   }
// // } else {
// //   alert("Unknown Error Some unexpected error occured.");

// // }
// // }
