import { Component, OnInit } from '@angular/core';
import { ManagerDetails } from '../../../interface/manager_details';
import { Router } from '../../../../../node_modules/@angular/router';
import { BrandManagerService } from '../brand-manager.service';

@Component({
  selector: 'app-add-brand-manager',
  templateUrl: './add-brand-manager.component.html',
  styleUrls: ['./add-brand-manager.component.scss']
})
export class AddBrandManagerComponent implements OnInit {

  managerDetails= new ManagerDetails;
  constructor(private managerService: BrandManagerService , private router : Router) { }
  loadingButton:boolean=false;
isBrandId:boolean=false;
brands:any;
  onSubmit(){
    this.loadingButton=true;
    const fd =  new FormData();

for(const key in this.managerDetails){
  fd.append(key, this.managerDetails[key]);
  }

this.managerService.addManager(fd)
.subscribe((res:any) => {
  // store token 
  // localStorage.setItem("access_token",res.access_token)
          this.router.navigate(['/main/manager']);
          this.resetform();
        }, (err) => {
          
          // alert(JSON.stringify(err));
              throw err;  
        })
 

}



  resetform(){

    this.managerDetails= new ManagerDetails();
  }
  
  ngOnInit() {
    this.managerService.getBrandIds()
    .subscribe((res:any)=>{
     this.brands=res;
     console.log(res)
     this.isBrandId=false;
      // this.pins=res;
      // this.pinIstrue= false;
    },
  (err)=>{
    alert(JSON.stringify(err));
  })
  }

}
