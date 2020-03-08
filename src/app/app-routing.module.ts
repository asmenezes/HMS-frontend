import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontsearchComponent } from './components/frontsearch/frontsearch.component'
import { MainresultsComponent } from './components/mainresults/mainresults.component'
import { NotfoundComponent } from './components/notfound/notfound.component'
import { AboutComponent } from './components/about/about.component'
import { RoombookComponent} from './components/roombook/roombook.component'


export const routes: Routes = [
  {
    path: '', component: FrontsearchComponent
  },
  {
    path: 'search', component: MainresultsComponent
  },
  {
    path: 'about' , component: AboutComponent
  },
  {
    path: 'book' , component: RoombookComponent
  },
  {
    path: '**' , component: NotfoundComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
