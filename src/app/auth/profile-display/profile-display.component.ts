import { AuthRestService } from './../service/auth-rest.service';
import { Component, OnInit } from '@angular/core';
import { Profile } from '../model/Profile';

@Component({
  selector: 'app-profile-display',
  templateUrl: './profile-display.component.html',
  styleUrls: ['./profile-display.component.css']
})
export class ProfileDisplayComponent implements OnInit {
  profile: Profile = new Profile();

  constructor(private authHttpService: AuthRestService) { }

  ngOnInit() {
    this.authHttpService.profile().subscribe(
      profile => {
        this.profile = profile;
      }
    );
  }

}
