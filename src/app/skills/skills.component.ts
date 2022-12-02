import { Component, OnInit } from '@angular/core';
import {ThemeService} from "../theme.service";
import {skillsSection} from "../../information";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  isDark: boolean = false;
  skillsImage: string;
  skillsSection = skillsSection;

  constructor(private theme: ThemeService) { }

  ngOnInit(): void {
    this.skillsImage = skillsSection.skillsAvatar;
    this.isDark = this.theme.isDarkMode();
    this.theme.darkTheme$.subscribe((mode)=>{
      this.isDark = mode == true;
    })
  }
}
