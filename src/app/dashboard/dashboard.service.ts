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





getProductCategory(){
     return this.customHttp.get(`/m/product-category`)
}





   



    getDashbord(fd){
        return this.customHttp.post(`/m/complaint/dashboard/card`,fd);
    }

// state by status of complaints
getStateByStatus(fd) {
    const I_api = `/m/complaint/dashboard/region`

    return this.customHttp.post(I_api,fd)

}

// product status vs category
get_Product_Status(fd){
    return this.customHttp.post(`/m/complaint/dashboard/status`,fd)

}


getProductIncidentAge(fd){
    return this.customHttp.post(`/m/complaint/dashboard/incident-age`,fd)
 
}

getProductRating(fd){
    return this.customHttp.post(`/m/complaint/dashboard/rating`,fd)
 
}


getProductWarrantyStatus(fd){
    return this.customHttp.post(`/m/complaint/dashboard/warranty`, fd)
}




getMTTR(fd) {
    const I_api = `/m/complaint/dashboard/avg`

    return this.customHttp.post(I_api,fd)
}



    // current incident new, fixed, inprogress,
    getCurrentIncident() {
     
        const I_api = `/m/complaint/graph/product-status`
        // const I_api = `/m/complaint/graph/category-status`

        return this.customHttp.get(I_api)

    }


    getCurrentInstallation(){
        // const I_api = `/m/installation/graph/product-status`
        return this.customHttp.get(`/m/installation/graph/product-status`)

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


    








}