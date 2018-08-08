import { Component, OnInit } from '@angular/core';
import { ServiceEngineerService } from '../service-engineer.service';
import { EngineerDetails } from '../../../interface/engineer_details';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-add-engineer',
  templateUrl: './add-engineer.component.html',
  styleUrls: ['./add-engineer.component.scss']
})
export class AddEngineerComponent implements OnInit {

  engineerDetails= new EngineerDetails
  pinIstrue: boolean = true;
  loadingButton: boolean = false;
  prodTypeOptions: Array<any>

  addressTypeOptions = ['Home', 'Office', 'Permanent'];

  pins: any;

  constructor(private engineerService: ServiceEngineerService, private router: Router) { }




  ngOnInit() {
    this.engineerService.getPincodes()
      .subscribe((res: any) => {
        this.pins = res;
        console.log(res)
        this.pinIstrue = false;
      },
        (err) => {
          alert(JSON.stringify(err));
        })


    this.engineerService.getProductCategory()
      .subscribe((res: any) => {
        this.prodTypeOptions = res;
        console.log(res)
      },
        (err) => {
          alert(JSON.stringify(err));
        })
  }





  onSubmit() {
    this.loadingButton=true;
    const fd =  new FormData();
    
    for(const key in this.engineerDetails){
      if(key== "address"){
        for(const key1 in this.engineerDetails.address){
        fd.append(key+"."+key1, this.engineerDetails.address[key1])
        }
      }
        
      
      else{
      fd.append(key, this.engineerDetails[key]);
      }
    }
    this.engineerService.addEngineer(fd)
    .subscribe((res:any) => {
     
              this.router.navigate(['/engineer']);
              this.resetform();
            }, (err) => {
              // throw err;
              
              alert(JSON.stringify(err));
      
            })
     
    
    }
    
    
    resetform(){
    
      this.engineerDetails= new EngineerDetails();
    }
    
    



}
