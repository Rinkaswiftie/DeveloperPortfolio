import { Component, OnInit } from '@angular/core';
import {skillsSection} from "../../information";
import {ThemeService} from "../theme.service";
@Component({
  selector: 'app-software-skills',
  templateUrl: './software-skills.component.html',
  styleUrls: ['./software-skills.component.scss']
})
export class SoftwareSkillsComponent implements OnInit {
  skills = skillsSection
  softwareSkills = skillsSection.softwareSkills;
  skillsSectionHeading = skillsSection.softwareSkillsHeader;
  isDark: boolean;
  constructor(private theme: ThemeService) { }

  ngOnInit(): void {
    this.isDark = this.theme.isDarkMode();
    this.theme.darkTheme$.subscribe((mode)=>{
      this.isDark = mode == true;
    })
  }
}
