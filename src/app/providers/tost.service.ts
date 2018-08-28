import { Injectable } from '@angular/core';
declare const $: any;
@Injectable({
  providedIn: 'root'
})
export class TostService {

  constructor() { }


  showNotificationSuccess(message?) {

    $.notify({

      icon: "add_alert",
      message: message || "Successfull"



    }, {
        type: 'success',
        timer: 1000,
        placement: {
          from: "top",
          align: "right"
        }
      });
  }





  showNotificationFailure(err) {
    $.notify({

      icon: "error_outline",
      message: err.msg,



    }, {
        type: 'danger',
        timer: 5000,
        placement: {
          from: "top",
          align: "right"
        }
      });
  }






}
