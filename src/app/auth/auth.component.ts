import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {faFacebook, faGoogle} from '@fortawesome/free-brands-svg-icons';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthServiceService} from './auth-service.service';
import {Router} from '@angular/router';
import {faHome} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AuthComponent implements OnInit  {
  facebook = faFacebook;
  google = faGoogle;
  loginForm: FormGroup;
  home = faHome;
  forgot = false;
  needHelp = false;
  forgotForm: FormGroup;
  signUpForm: FormGroup;
  helpMeForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: AuthServiceService, private route: Router) {
  }

  ngOnInit(): void {
    this.logInFormBuilder();
    this.forgotFormBuild();
    this.signUpFormBuild();
    this.helpCenterFormBuild();
  }

  private logInFormBuilder() {
    this.loginForm = this.formBuilder.group({
      email: [undefined, [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      password: [undefined, Validators.required]
    });
  }
  private forgotFormBuild() {
    this.forgotForm = this.formBuilder.group({
      email: [undefined, [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]]
    });
  }

  private signUpFormBuild() {
    this.signUpForm = this.formBuilder.group({
      email: [undefined, [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      password: [undefined, Validators.required]
    });
  }
  helpCenterFormBuild() {
    this.helpMeForm = this.formBuilder.group({
      helpme: [undefined, Validators.required]
    });
  }

  forgotPassword(value: string) {
    if (value === 'si') {
      this.forgot = false;
      this.needHelp = false;
    } else if (value === 'su') {
      this.needHelp = false;
      this.forgot = false;
    } else if (value === 'nh') {
      this.needHelp = true;
      this.forgot = true;
    } else {
        this.forgot = true;
        this.needHelp = true;
    }
  }

  nav() {
    this.route.navigate(['./']);
  }
}
