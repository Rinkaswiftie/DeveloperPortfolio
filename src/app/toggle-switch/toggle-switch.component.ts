import { Component, OnInit } from '@angular/core';
import {ThemeService} from "../theme.service";

@Component({
  selector: 'app-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.scss']
})
export class ToggleSwitchComponent implements OnInit {
  isChecked: boolean;
  isDark: boolean;


  constructor(private theme: ThemeService) { }

  ngOnInit(): void {
    this.isDark = this.theme.isDarkMode();
    this.isChecked = this.isDark;
    this.theme.darkTheme$.subscribe((mode)=>{
      this.isDark = mode == true;
    });
  }

  changeState(){
    this.isChecked = !this.isChecked;
    this.theme.changeState()
  }

}
