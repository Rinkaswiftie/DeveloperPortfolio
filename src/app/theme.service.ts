import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ThemeService{
  private darkTheme:boolean;
  darkTheme$ : BehaviorSubject<boolean>;

  constructor() {
    let initialValue = false;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      initialValue = true;
    }
    const item = window.localStorage.getItem('darkTheme');
    this.darkTheme = item ? (item == 'yes') : initialValue;
    if(this.darkTheme) {
      document.getElementById('body').classList.add('dark-mode');
    }
    this.darkTheme$ = new BehaviorSubject<boolean>(this.darkTheme)
  }

  changeState(){
    this.darkTheme = !this.darkTheme;
    if(this.darkTheme) {
      document.getElementById('body').classList.add('dark-mode');
    }else{
      document.getElementById('body').classList.remove('dark-mode');
    }

    window.localStorage.setItem('darkTheme',this.darkTheme? 'yes':'no');
    this.darkTheme$.next(this.darkTheme);
  }

  isDarkMode(){
    return this.darkTheme === true;
  }
}
