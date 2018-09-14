export class User {
    constructor(
   public name:string,
   public password:string,
    public userType:string,
    ){}

}
export class Token {
    access_token: string;
  }
  
  export class UserInfo {
    contactNo: string;
    email: string;
    picUrl: string;
    id: number;
    name: string;
    nickName: string;
    userType: string;
    
    roles:Array<any>;
    username: string;
  }


  
  export class AssingedEngineer {
  
    comment?:string;
    updateInfo="assignedServiceEngineer";
    serviceEngineerId : string;
  }

  export class RejectComplaint{
    pic :any;
    comment:string;
    updateInfo="reject";
  }

 export class RejectInstallation{
    pic :any;
    comment:string;
    updateInfo="reject";
  }


  export class DateRange{

    startDate:Date;
    endDate:Date;
  }
  