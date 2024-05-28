import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.css']
})
export class ThemeSwitcherComponent {
  themeToggleDarkIcon!: HTMLElement | null;
  themeToggleLightIcon!: HTMLElement | null;

  ngOnInit(): void {
    this.themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    this.themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

    // Change the icons inside the button based on previous settings
    if (
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      this.themeToggleLightIcon?.classList.remove('hidden');
    } else {
      this.themeToggleDarkIcon?.classList.remove('hidden');
    }
  }

  toggleTheme(): void {
    // Toggle icons
    this.themeToggleDarkIcon?.classList.toggle('hidden');
    this.themeToggleLightIcon?.classList.toggle('hidden');

    // If set via local storage previously
    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      }
    } else {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      }
    }

    // Dispatch the custom event
    const event = new Event('dark-mode');
    document.dispatchEvent(event);
  }
}
