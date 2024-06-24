import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { initFlowbite } from 'flowbite';
import { RouterLink } from '@angular/router';
import DateRangePicker from 'flowbite-datepicker/DateRangePicker';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  ngOnInit(): void {
    initFlowbite();

  }

  ngAfterViewInit(): void {
      const dateRangePickerEl = document.getElementById('date-rangepicker');
      new DateRangePicker(dateRangePickerEl, {
          // options
      });
  }

}
