import {Component, Input, OnInit} from '@angular/core';
import {ThemeService} from "../theme.service";
import {achievementSection} from '../../information';

@Component({
  selector: 'app-achievement-section',
  templateUrl: './achievements-section.component.html',
  styleUrls: ['./achievements-section.component.scss']
})
export class AchievementsSectionComponent implements OnInit {
  isDarkMode: boolean;
  achievementSection = achievementSection;

  constructor(private theme: ThemeService) { }

  ngOnInit(): void {
    this.isDarkMode = this.theme.isDarkMode()
    this.theme.darkTheme$.subscribe((mode)=>{
      this.isDarkMode = mode == true
    })
  }
}
