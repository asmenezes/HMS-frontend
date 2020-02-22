import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomescreenComponent } from './components/welcomescreen/welcomescreen.component'
import { MainresultsComponent } from './components/mainresults/mainresults.component'
import { NotfoundComponent } from './components/notfound/notfound.component'
import { AboutComponent } from './components/about/about.component'


const routes: Routes = [
  {
    path: '', component: WelcomescreenComponent
  },
  {
    path: 'search', component: MainresultsComponent
  },
  {
    path: 'about' , component: AboutComponent
  }
  //,{ path: '/', component: WelcomescreenComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
