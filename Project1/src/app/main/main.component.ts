import { Component } from '@angular/core';
import { MainHeadingComponent } from "../main-heading/main-heading.component";
import { MainContentComponent } from "../main-content/main-content.component";

@Component({
  selector: 'app-main',
  imports: [MainHeadingComponent, MainContentComponent, RouterModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}

import { RouterModule, Routes } from '@angular/router';


