import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    /* { path: 'about', loadChildren: './about/about.module#AboutModule' },
    { path: 'contact', loadChildren: './contact/contact.module#ContactModule' },
    { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule' }, */
    { path: '**', redirectTo: 'home' }
];
