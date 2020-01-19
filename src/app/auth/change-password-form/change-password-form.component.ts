import { TokenService } from './../service/token.service';
import { AuthRestService } from './../service/auth-rest.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css']
})
export class ChangePasswordFormComponent implements OnInit {
  editForm: FormGroup;
  errorMessage: String = '';
  @ViewChild('changePasswordModal', {static: false}) changePasswordModal;
  config = {
    keyboard: false,
    ignoreBackdropClick: false
  };


  constructor(private formBuilder: FormBuilder, private modalService: NgbModal,
    private authHttpService: AuthRestService, private tokenService: TokenService) {
  }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      newPassword: ['', [Validators.required]],
      confirmNewPassword: ['', [Validators.required]],
      oldPassword: ['', [Validators.required]]
    });
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
  }

  checkPasswords() {
    const pass =  this.editForm.controls.newPassword.value;
    const confirmPass =  this.editForm.controls.confirmNewPassword.value;
    return pass === confirmPass ? true : false;
  }

  onChangePassword() {
    this.errorMessage = '';
    if (!this.checkPasswords()) {
      this.errorMessage = 'Unete šifre se ne poklapaju.';
      return;
    }

    const passInfo = this.editForm.value;
    this.authHttpService.changePassword(passInfo).subscribe(
      (data) => {
        this.tokenService.saveToken(data.token);
        this.modalService.dismissAll();
      },
      (error) => {
        console.log(error.error);
        this.errorMessage = error.error;
      }
    );
  }

}
