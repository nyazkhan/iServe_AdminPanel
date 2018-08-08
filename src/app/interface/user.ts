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
    serviceEngineerId : number;
  }

  export class RejectComplaint{
    pic :any;
    comment:string;
    updateInfo="reject";
  }
