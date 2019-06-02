import { IUserRegistration } from './../core/interfaces/user-registration.interface';
import { ProfileService } from './service/profile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
  
  }

}
