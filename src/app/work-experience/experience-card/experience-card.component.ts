import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import ColorThief from "colorthief";
import {ExperienceCardModel} from "./experience-card.model";
import {ThemeService} from "../../theme.service";

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss']
})
export class ExperienceCardComponent implements OnInit {
  isDark = false;
  colorArrays = [];
  @Input('item') experience: ExperienceCardModel;
  @ViewChild('imgRef', {static: false}) img: ElementRef;

  constructor(private theme: ThemeService) {
  }

  ngOnInit(): void {
    this.isDark = this.theme.isDarkMode()
    this.theme.darkTheme$.subscribe((mode) => {
      this.isDark = mode
    })
  }

  getColorArrays() {
    this.colorArrays = new ColorThief().getColor(this.img.nativeElement);
  }

  rgb() {
    return this.colorArrays.length === 0 ? 'rgb(0,0,0)' : 'rgb(' + this.colorArrays.join(', ') + ')';
  }
}
