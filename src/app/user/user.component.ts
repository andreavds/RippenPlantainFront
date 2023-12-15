import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../models/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {

  userProfile: UserProfile = {
    fullName: 'Naruto',
    username: 'narutokun13',
    profilePicture: 'https://s3.zerochan.net/Uzumaki.Naruto.240.3068248.jpg',
    bannerPicture: 'https://i.pinimg.com/originals/03/6c/5e/036c5ea7a90652a4ef7e6e5e02290225.jpg',
    bio: 'amo a sasukeeeeeee temeeee'
  };

  constructor() { }

  ngOnInit() {}

}

