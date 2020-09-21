import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes=[{
    path:'', component:HomeComponent, children:[
        {
            path:'dashboard', loadChildren:()=>import('../home/dashboard/dashboard.module').then(m=>m.DashboardModule)
        },
        {
            path:'wall', loadChildren:()=> import('../home/wall/wall.module').then(m=>m.WallModule)
        }
       
    ]
}]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class HomeRoutingModule { }