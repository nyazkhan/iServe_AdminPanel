import { Component, OnInit } from '@angular/core';
import { TostService } from '../../providers/tost.service';
import { LoginService } from '../login/login.service';

declare const $: any;

@Component({
  selector: 'app-edit-engineer',
  templateUrl: './edit-user-details.component.html',
  styleUrls: ['./edit-user-details.component.scss']
})
export class EditUserDetailsComponent implements OnInit {

  editManagerDetails: any = {};


  formButtonHide: boolean = false;
  toBeEdit: string;
  toBeEditValue: string;
  imgfile: any;
  urlTOShowImg: any;

  showForm = false;



  changePassword: any = {
    newPassword: '',
    oldPassword: ''
  };

  passwordFormShow = false;




  constructor( 
    private tostservice: TostService, 
    private loginService: LoginService) { }

  ngOnInit() {

    this.getManagerDetails();

  }

  getManagerDetails() {
    this.editManagerDetails.name = localStorage.getItem("name");
    this.editManagerDetails.pic = localStorage.getItem("picUrl");
    this.editManagerDetails.email = localStorage.getItem("email");
    this.editManagerDetails.contactNo = localStorage.getItem("contactNo");
    this.editManagerDetails.userName = localStorage.getItem("username");
    this.editManagerDetails.userType = localStorage.getItem("roles");
  }
  setManagerDetails(data) {

    if (this.toBeEdit == 'Name') {

      // localStorage.setItem("name", data.name)
      this.loginService.updateUsername(data.name);
    }
    if (this.toBeEdit == 'Email') {

      this.loginService.updateUserEmail(data.email);
    }
    if (this.toBeEdit == 'Contact No') {
      this.loginService.updateUserContactNo(data.contactNo);
    }
    this.getManagerDetails();

  }



  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      this.imgfile = event.target.files[0];
      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event: any) => { // called once readAsDataURL is completed
        this.urlTOShowImg = event.target.result;
      }
    }
  }




  editValue(data) {
    this.formButtonHide = true;
   

    console.log(data);
  
    if (data.contactNo) { data.contactNo = data.contactNo.toString(); }

    this.loginService.editManagerdetails(data)
      .subscribe((res: any) => {
        console.log(res)
        this.setManagerDetails(data);
        this.closeFormModal()
        this.resetForm();
        this.tostservice.showNotificationSuccess("change successfuly");
        $('#filed').show();

        this.formButtonHide = false;
      }, (err) => {
        this.tostservice.showNotificationFailure(err);
        this.formButtonHide = false;
      })
  }

  toEdit(val) {
    this.toBeEdit = val;
    this.showForm = true;
   

    if (this.toBeEdit == 'Name') {

      this.toBeEditValue = this.editManagerDetails.name;
      $('#filed').hide();


    }
    if (this.toBeEdit == 'Email') {

      this.toBeEditValue = this.editManagerDetails.email;
    }
    if (this.toBeEdit == 'Contact No') {

      this.toBeEditValue = this.editManagerDetails.contactNo;
    }
  }

  resetForm() {
    this.imgfile = null;
    this.urlTOShowImg = null;
    this.formButtonHide = false;
    this.closeFormModal();
    $('#filed').show();

  }


  PasswordForm() {
this.passwordFormShow= true;
this.loginService.changeManagerPassword({"oldPassword":this.changePassword.oldPassword,"newPassword":this.changePassword.newPassword})
.subscribe((res:any)=>{
  this.closePasswordFormModal();
  this.tostservice.showNotificationSuccess("Password Successfuly Change")
this.passwordFormShow=false;
this.changePassword.oldPassword='';
this.changePassword.newPassword='';

},(err)=>{
this.tostservice.showNotificationFailure(err);
this.passwordFormShow=false;
})

  }




  changePicture() {
    this.formButtonHide = true;
    const fd = new FormData();
    fd.append("picture", this.imgfile)
    this.loginService.changePicture(fd)
      .subscribe((res: any) => {
        this.loginService.updateUserPicture(res.picUrl);
        this.editManagerDetails.pic = localStorage.getItem("picUrl");
        this.setManagerDetails(this.imgfile);
        this.closeFormModal()
        this.resetForm();
        this.tostservice.showNotificationSuccess("Profile Picture Change Successfuly");

        this.formButtonHide = false;
      }, (err) => {
        this.tostservice.showNotificationFailure(err);
        this.formButtonHide = false;

      })
  }

  closeFormModal() {
    this.showForm = false;
    $('#editFormModel').modal('hide')
  }


  closePasswordFormModal() {
    this.passwordFormShow = false;
    $('#changePasswordModal').modal('hide')
  }
}
