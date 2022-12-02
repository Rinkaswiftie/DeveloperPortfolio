import {Component, Input, OnInit} from '@angular/core';
import {ThemeService} from "../../theme.service";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() repo;
  isDarkMode: boolean;

  constructor(private theme: ThemeService) { }

  ngOnInit(): void {
    this.isDarkMode = this.theme.isDarkMode()
    this.theme.darkTheme$.subscribe((mode)=>{
      this.isDarkMode = mode == true
    })
  }

  formatFileSizeDisplay = value => {
    if (value < 1024) {
      return `${value} KB`;
    }
    return `${parseFloat((value / 1024).toFixed(1))} MB`;
  };


  openUrlInNewTab(url: string, name: string) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }


}
