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
  template: `
    <ion-tabs>
      <ion-tab tabIcon="heart" [root]="tab1"></ion-tab>
      <ion-tab tabIcon="star" [root]="tab2"></ion-tab>
    </ion-tabs>`
})
export class Playlist {
  tab1: any;
  tab2: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1 = Playlist;
    this.tab2 = Videos;
  }


}
