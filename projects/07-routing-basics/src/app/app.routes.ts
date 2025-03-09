import { Routes } from '@angular/router';
import { GreetingsComponent } from './greetings.component';

export const routes: Routes = [
  {
    // add a default path to greetings component
    // yuou can do some stuff like loadComp0nent and loadChildren for lazy loading implementation
    // you can also add advanced routes and private routes in this layer.
    path: "",
    component: GreetingsComponent
  },
];
