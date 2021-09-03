import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.scss']
})
export class ThemeSwitchComponent implements OnInit {
  private static readonly THEME_LIGHT = 'light-theme';
  public colorTheme: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  public selectLightTheme(): void {
    this.document.documentElement.classList.add(ThemeSwitchComponent.THEME_LIGHT);
  }

  public selectDarkTheme(): void {
    this.document.documentElement.classList.remove(ThemeSwitchComponent.THEME_LIGHT);
  }

  public themeHandler() {
    !this.colorTheme ? this.selectLightTheme() : this.selectDarkTheme();
    this.colorTheme = !this.colorTheme;
  }

  ngOnInit() {
  }

}
