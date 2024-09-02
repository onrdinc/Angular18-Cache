import { Routes } from '@angular/router';
import { C1Component } from './components/c1/c1.component';
import { C2Component } from './components/c2/c2.component';

export const routes: Routes = [
    {
        path:"",
        component:C1Component
    },
    {
        path:"c1",
        component:C1Component
    },
    {
        path:"c2",
        component:C2Component
    }
];
