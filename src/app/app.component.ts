import {Component, OnInit} from '@angular/core';
import {Feature, FeatureTogglesService} from 'ngx-feature-flag';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  isEnabled = false;
  constructor(private featureService: FeatureTogglesService) {}

  ngOnInit() {
    console.log(`:::in OnInit`);
    this.featureService.getFeature('Test').subscribe((f: Feature) => {
        this.isEnabled = f.attributes.enabled;
        console.log(`:::in OnInit enabled: ${this.isEnabled}`);
      },
      err => {
        this.isEnabled = false;
        console.log('This feature test is not accessible in fabric8-toggles-service' + err);
      });
  }
}
