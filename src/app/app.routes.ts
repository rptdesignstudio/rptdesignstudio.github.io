import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Projects } from './pages/projects/projects';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Service } from './pages/service/service';


export const routes: Routes = [

    {
        path:'',
        component:Home
    },

    {
        path:'projects',
        component:Projects
    },

    {
        path:'projects/:slug',
        loadComponent: () =>
            import('./pages/project-details/project-details')
                .then(m => m.ProjectDetailsComponent)
    },

    {
        path:'services',
        component: Service
    },

    {
        path:'about',
        component:About
    },

    {
        path:'contact',
        component:Contact
    },

   {
    path: '**',
    loadComponent: () =>
        import('./pages/not-found/not-found')
            .then(m => m.NotFound)
}
   
];