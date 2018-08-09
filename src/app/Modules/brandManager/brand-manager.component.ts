import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';
import { BrandManagerService } from './brand-manager.service';
import { ManagerDetails } from '../../interface/manager_details';

@Component({
  selector: 'app-brand-manager',
  templateUrl: './brand-manager.component.html',
  styleUrls: ['./brand-manager.component.scss']
})
export class BrandManagerComponent implements OnInit {

  constructor(private router: Router, private brandService: BrandManagerService) { }

  dataRows: any;
  isDataLoad: boolean = false;
  managerDetails= new ManagerDetails;

  headerRow: Array<string> = [
    'S.No.',
    'Profile Picture',
    'Name',
    'User Name',
    'Phone No',
    'Email',
   
  ]
  ngOnInit() {
    this.getManagers();
   this.getBrandIds();
  }


  getManagers(){
    this.brandService.getManager()
    .subscribe((res:any)=>{
     this.dataRows= res;
    this.isDataLoad=false;
    console.log(res)
    },
    (err)=>{
      // throw err;
             alert(JSON.stringify(err));
            })
  }

  
  getBrandIds(){
  this.brandService.getBrandIds()
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



  loadingButton:boolean=false;
  isBrandId:boolean=false;
  brands:any;
    onSubmit(){
      this.loadingButton=true;
      const fd =  new FormData();
  
  for(const key in this.managerDetails){
    fd.append(key, this.managerDetails[key]);
    }
  
  this.brandService.addManager(fd)
  .subscribe((res:any) => {
    // store token 
    // localStorage.setItem("access_token",res.access_token)
            // this.router.navigate(['/main/manager']);
            this.resetform();
          }, (err) => {
            
            alert(JSON.stringify(err));
                // throw err;  
          })
   
  
  }
  


  resetform(){

        this.managerDetails= new ManagerDetails();
      }
}
