export class EngineerDetails {
    name:string;
    nickName?:string;
    username: string;
    password: string;
    contactNo:number;
    userType="ServiceEngineer";
    productTypeIds:Array<number>;
       address={
        address:"",
        city:"",
        state:"",
        country:"",
        postalCode:"",
        addressType:"",
                }
    
    pincodes:Array<number>=[];
            }