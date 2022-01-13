import { Routes } from "@angular/router";
import {ContatoComponent} from "./institucional/form/contato/contato.component";
import { HomeComponent } from "./navegacao/home/home.component";

export const rootRouterConfing: Routes = [
    {path:' ', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'contato', component: ContatoComponent}
]
