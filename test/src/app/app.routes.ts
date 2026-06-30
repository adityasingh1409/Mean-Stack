import { Routes } from '@angular/router';
import { App } from './app';
import { Card } from './card/card';
import { Contact } from './contact/contact';
import { About } from './about/about';
import { Child } from './child/child';

export const routes: Routes = [
    // {
    //     path: '',
    //     component: App
    // },
    {
        path: 'child',
        component: Child
    },
    {
        path: 'contact',
        component: Contact
    },
    {
        path: 'about',
        component: About
    },
    
    
];
