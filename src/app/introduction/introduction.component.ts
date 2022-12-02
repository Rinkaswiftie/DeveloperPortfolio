import { Component, OnInit } from '@angular/core';
import {introduction} from '../../information';
import {ThemeService} from "../theme.service";

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {
  isDark = true;
  greeting = introduction;
  constructor(private theme: ThemeService) { }

  ngOnInit(): void {
    this.isDark = this.theme.isDarkMode()
    this.theme.darkTheme$.subscribe((mode)=>{
      this.isDark = mode == true
    })
  }
}
