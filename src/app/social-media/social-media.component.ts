import { Component, OnInit } from '@angular/core';
import {ThemeService} from "../theme.service";
import {socialMediaLinks} from "../../information";

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {
  isDark: boolean = false;
  socialMediaLinks = socialMediaLinks;

  constructor(private theme: ThemeService) { }

  ngOnInit(): void {
    this.isDark = this.theme.isDarkMode();
    this.theme.darkTheme$.subscribe((mode)=>{
      this.isDark = mode == true;
    })
  }
}
