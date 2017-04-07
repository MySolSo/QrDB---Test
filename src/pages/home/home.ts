import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

img:String;

  constructor(public navCtrl: NavController,public camera: Camera) {

  }

getPic(type:String) {

    let options = {
      targetWidth:400,
      targetHeight:400,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options).then((url) => {
      this.img = url;
    });

  }



}
