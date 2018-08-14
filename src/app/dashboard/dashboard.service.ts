import { Injectable } from '@angular/core';
import { CustomHttpService } from '../providers/custom-http.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {

    constructor(private customHttp: CustomHttpService) {
this.loadScript();
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



    getStatusCount() {
        const I_api = `/m/complaint/graph/product`

        return this.customHttp.get(I_api)

    }



    getCurrentIncident() {
        // const I_api = `/m/status/complaint`

        // const I_api = `/m/complaint/graph/status`
        // const I_api = `/m/complaint/graph/product`
        // const I_api = ` /m/complaint/graph/category`
        const I_api = `/m/complaint/graph/product-status`
        // const I_api = `/m/complaint/graph/category-status`

        return this.customHttp.get(I_api)

    }


    getStateByStatus() {
        const I_api = `/m/complaint/graph/state-status`
       
        return this.customHttp.get(I_api)

    }

    getIncidentWeeklyReport(){
        const I_api = `/m/complaint/graph/incident-weekly-report`

        return this.customHttp.get(I_api)

    }





    getCategoryCounts(){
        const I_api = `/m/complaint/graph/category`
       
        return this.customHttp.get(I_api)  
    }


    getCategoryStatus(){
        const I_api = `/m/complaint/graph/category-status`
       
        return this.customHttp.get(I_api)    
    }


getMTTR(){
    const I_api = `/m/complaint/graph/mttr`
       
    return this.customHttp.get(I_api)   
}

}