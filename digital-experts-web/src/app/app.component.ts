import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {  PixelService } from 'ngx-multi-pixel';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'digital-experts-web';

  constructor(private pixel: PixelService) {

  }

  ngOnInit(): void {
    this.onConsent();
  }

  onWhatsAppContact(): void {
  }

  onConsent(): void {
    this.pixel.initialize(['1676952112730164']);
  }

}
