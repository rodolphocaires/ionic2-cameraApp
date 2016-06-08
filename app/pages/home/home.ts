import {Component} from "@angular/core";
import {Camera} from 'ionic-native';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  public photo: string = 'http://wvs.topleftpixel.com/photos/2011/03/allen-gardens_snow_dog-walker_bw_01.jpg';
  constructor() {

  }

  takePicture() {
    Camera.getPicture({
      destinationType: Camera.DestinationType.DATA_URL,
      targetHeight: 1000,
      targetWidth: 1000
    })
    .then((imageData) => {
      this.photo = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);
    });
  }
}
