import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeadingComponent } from "./heading/heading.component";
import { MainComponent } from "./main/main.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeadingComponent, MainComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Project1';
}
