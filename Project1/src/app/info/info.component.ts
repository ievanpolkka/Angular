import { Component } from '@angular/core';
import { InfoHeadingComponent } from "../info-heading/info-heading.component";
import { RouterEvent, RouterModule } from '@angular/router';
import { InfoContentComponent } from '../info-content/info-content.component';

@Component({
  selector: 'app-info',
  imports: [InfoHeadingComponent, RouterModule, InfoContentComponent],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {

}
