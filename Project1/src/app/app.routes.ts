import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
   {path: '', component: MainComponent},
   {path: 'info', component: InfoComponent},
   {path: 'contact', component: ContactComponent}
];
