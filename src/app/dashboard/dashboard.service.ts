import { Injectable } from '@angular/core';
import { CustomHttpService } from '../providers/custom-http.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {

    constructor(private customHttp: CustomHttpService) {
        // this.loadScript();
    }




    script = {
        name: 'GoogleCharts',
        src: 'https://www.gstatic.com/charts/loader.js'
    };

    loadScript(): any {
        return Observable.create((observer) => {
            if (document.getElementById(this.script.name) == null) {
                const node = document.createElement('script');
                node.src = this.script.src;
                node.type = 'text/javascript';
                node.async = false;
                node.charset = 'utf-8';
                node.id = this.script.name;
                document.getElementsByTagName('head')[0].appendChild(node);
                node.onload = function () {
                    observer.complete();
                };
            } else {
                observer.complete();
            }
        });
    }



    // compaints status count of products
    getStatusCount() {
        const I_api = `/m/complaint/graph/product`
// this.getsubCatCount()
        return this.customHttp.get(I_api)

    }
 // compaints status count of products
 getSubCatCount(id) {
    //  console.log("hell0o")
    const I_api = `/m/complaint/graph/product-status/${id}`

    return this.customHttp.get(I_api)

}





getDashboardFilterByDate(filterBy){
     return this.customHttp.post(`dhbh`,{"duration":filterBy})
}





    getInstallationStatusCount(){
        const I_api = `/m/installation/graph/product`

        return this.customHttp.get(I_api)  
    }




    getDashbord(){
        return this.customHttp.get(`/m/dashboard/card/2018-09`);
    }


    // current incident new, fixed, inprogress,
    getCurrentIncident() {
        // const I_api = `/m/status/complaint`

        // const I_api = `/m/complaint/graph/status`
        // const I_api = `/m/complaint/graph/product`
        // const I_api = ` /m/complaint/graph/category`
        const I_api = `/m/complaint/graph/product-status`
        // const I_api = `/m/complaint/graph/category-status`

        return this.customHttp.get(I_api)

    }


    getCurrentInstallation(){
        // const I_api = `/m/installation/graph/product-status`
        return this.customHttp.get(`/m/installation/graph/product-status`)

    }




    // state by status of complaints
    getStateByStatus() {
        const I_api = `/m/complaint/graph/state-status`

        return this.customHttp.get(I_api)

    }

    // state by status of installation
    getInstallationStateByStatus() {
        const I_api = `/m/installation/graph/state-status`

        return this.customHttp.get(I_api)

    }


    //  incidents weekly report

    getIncidentWeeklyReport() {
        const I_api = `/m/complaint/graph/incident-weekly-report`

        return this.customHttp.get(I_api)

    }





    getCategoryCounts() {
        const I_api = `/m/complaint/graph/category`

        return this.customHttp.get(I_api)
    }


    getCategoryStatus() {
        const I_api = `/m/complaint/graph/category-status`

        return this.customHttp.get(I_api)
    }


    getMTTR() {
        const I_api = `/m/complaint/graph/mttr`

        return this.customHttp.get(I_api)
    }








}