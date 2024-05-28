import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from '../search-input/search-input.component';
import { ThemeSwitcherComponent } from '../theme-switcher/theme-switcher.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, SearchInputComponent, ThemeSwitcherComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

}
