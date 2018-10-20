import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule }from '@angular/router';

import { SignUpComponent } from './sign-up/sign-up.component';
import { HomePageComponent } from './home-page/home-page.component';

export const router : Routes = [
    { path: '', redirectTo:'/home', pathMatch: 'full'},
    { path:'home', component: HomePageComponent},
    { path:'signup', component: SignUpComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);