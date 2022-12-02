import {Component, Input, OnInit} from '@angular/core';
import {ThemeService} from "../../theme.service";

@Component({
  selector: 'app-achievement',
  templateUrl: './achievements-card.component.html',
  styleUrls: ['./achievements-card.component.scss']
})
export class AchievementsCardComponent implements OnInit {
  @Input() isDarkMode: boolean;
  @Input() cardInfo;

constructor() { }

  ngOnInit(): void {
  }

  openUrlInNewTab(url: string, name: string) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }
}
