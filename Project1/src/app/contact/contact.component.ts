import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactHeadingComponent } from "../contact-heading/contact-heading.component";
import { ContactContentComponent } from "../contact-content/contact-content.component";

@Component({
  selector: 'app-contact',
  imports: [RouterModule, ContactHeadingComponent, ContactContentComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
