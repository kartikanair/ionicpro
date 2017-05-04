import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams} from "ionic-angular";
import {Videos} from "../videos/videos";

/**
 * Generated class for the Playlist page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-playlist',
  templateUrl: 'playlist.html',
})
export class Playlist {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onstart() {
    this.navCtrl.push('Videos');

  }


}
