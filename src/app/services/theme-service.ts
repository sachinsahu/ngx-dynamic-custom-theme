/**
 * Theme Service
 * Service to manage theme globally
 */
import { Injectable } from '@angular/core';

@Injectable()
export class ThemeService {
  constructor() { }

  /**
   * Apply Provided Theme Pallete
   * @param themePallete theme variables to be replaced.
   */
  public setTheme(themePallete: Object) {
    Object.keys(themePallete).forEach(k =>
      document.documentElement.style.setProperty(`--${k}`, themePallete[k])
    );
  }
}
