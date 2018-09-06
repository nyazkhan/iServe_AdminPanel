export class EngineerDetails {
    name:string;
    username: string;
    password: string;
    contactNo:number;
    email:string;
    specialist:string;
    pic?:any;
    userType="ServiceEngineer";
//     productTypeIds:Array<number>;
productTypeIds=[6,10,11,12,13,14,15,16,17,18, 19, 20 ,21,22,23,24,25,26,29,30,31,32,41,42,43,44,45,46,47,48,49];
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