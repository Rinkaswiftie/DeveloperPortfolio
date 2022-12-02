import {Component, OnInit} from '@angular/core';
import {openSource} from '../../information';
import {ThemeService} from "../theme.service";
import {socialMediaLinks} from "../../information"
import {GithubService} from "../github.service";

@Component({
  selector: 'app-passion-projects',
  templateUrl: './passion-projects.component.html',
  styleUrls: ['./passion-projects.component.scss']
})
export class PassionProjectsComponent implements OnInit {
  passionProjects = openSource;
  repo = [];
  isDarkMode: boolean;
  socialMediaLinks = socialMediaLinks;

  constructor(private theme: ThemeService, private github: GithubService) {
  }

  ngOnInit(): void {
    this.isDarkMode = this.theme.isDarkMode();
    this.theme.darkTheme$.subscribe((mode) => {
      this.isDarkMode = mode == true;
    });
    this.github.getData().subscribe((res: any) => this.repo = res);
    this.github.initializeRepoData();
    console.log(this.repo);
  }


}
