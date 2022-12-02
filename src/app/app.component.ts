import {Component} from '@angular/core';
import {ThemeService} from "./theme.service";
import {
  introduction,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  myJourney,
  openSource,
  achievementSection
} from "../information"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isDarkMode: boolean;
  selectedTab = 0;
  tabCount = 8;
  information = {
    introduction,
    socialMediaLinks,
    splashScreen,
    skillsSection,
    myJourney,
    openSource,
    achievementSection
  }

  constructor(private theme: ThemeService) {
  }

  ngOnInit(): void {
    this.isDarkMode = this.theme.isDarkMode();
    this.theme.darkTheme$.subscribe((mode) => {
      this.isDarkMode = mode == true;
    })
  }
}
