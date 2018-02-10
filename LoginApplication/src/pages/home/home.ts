import { Component, ViewChild } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import {LoginPage} from '../login/login';
import {RegisterPage} from '../register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('username') uname;
  @ViewChild('password') password;

  constructor(public navCtrl: NavController, public alertCtrl:AlertController) {

  }

/**  signIn(){

    if(this.uname.value == "shyam" && this.password.value == "shyam"){

          let alert = this.alertCtrl.create({
            title: 'Login',
            subTitle: 'Login Sucess',
            buttons: ['OK']
          });
            alert.present();
          }

  } */


  signIn(){
    this.navCtrl.push(LoginPage);
  }

  register(){
    this.navCtrl.push(RegisterPage);
  }

}
