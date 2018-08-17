export class EngineerDetails {
    name:string;
    username: string;
    password: string;
    contactNo:number;
    email:string;
    specialist:string;
    pic:any;
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