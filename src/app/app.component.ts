import {Component, OnInit} from '@angular/core';
import {Feature, FeatureFlagConfig, FeatureTogglesService} from 'ngx-feature-flag';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  isEnabled = false;
  show = true;
  featureConfig: FeatureFlagConfig;
  constructor(private featureService: FeatureTogglesService) {}

  ngOnInit() {
    this.featureConfig = {
      'user-level': 'internal',
      'featuresPerLevel':
        {
          'experimental': [{'attributes':
              {'description': 'Planner menu',
                'enabled': true,
                'enablement-level': 'experimental',
                'user-enabled': true,
                'name': 'Planner featureA'},
            'id': 'Planner.featureA'}],
          'internal': [{'attributes':
              {'description': 'Planner menu',
                'enabled': true,
                'enablement-level': 'internal',
                'user-enabled': true,
                'name': 'Planner'},
            'id': 'Planner'}],
          'beta': [{'attributes':
              {'description': 'Planner menu',
                'enabled': true,
                'enablement-level': 'beta',
                'user-enabled': true,
                'name': 'Planner featureB'},
            'id': 'Planner.featureB'}]
        }
    } as FeatureFlagConfig;
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
