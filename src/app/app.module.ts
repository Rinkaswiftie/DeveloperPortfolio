import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderSectionComponent } from './header-section/header-section.component';
import { ToggleSwitchComponent } from './toggle-switch/toggle-switch.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ButtonComponent } from './button/button.component';
import { ExperienceCardComponent } from './work-experience/experience-card/experience-card.component';
import { SoftwareSkillsComponent } from './software-skills/software-skills.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { PassionProjectsComponent } from './passion-projects/passion-projects.component';
import { AchievementsCardComponent } from './achievement-section/achievements/achievements-card.component';
import { AchievementsSectionComponent } from './achievement-section/achievements-section.component';
import { ProjectComponent } from './passion-projects/project/project.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material.module";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderSectionComponent,
    ToggleSwitchComponent,
    IntroductionComponent,
    SocialMediaComponent,
    SkillsComponent,
    WorkExperienceComponent,
    ButtonComponent,
    ExperienceCardComponent,
    SoftwareSkillsComponent,
    SplashScreenComponent,
    PassionProjectsComponent,
    AchievementsCardComponent,
    AchievementsSectionComponent,
    ProjectComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
