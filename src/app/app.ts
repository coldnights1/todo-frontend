// src/app/app.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header';
import { BodyComponent } from './body/body';
import { NgClass } from '@angular/common';
import { FooterComponent } from './footer/footer';
interface Task {
  task_name: string;
  time_to_complete: string;
  importance: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BodyComponent,HeaderComponent,NgClass,FooterComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']   // ← plural!
})
export class App {
  
}
