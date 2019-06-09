import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HajjComponent } from './hajj/hajj.component';
import { UmrahComponent } from './umrah/umrah.component';
import { FuneralComponent } from './funeral/funeral.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'hajj', component: HajjComponent},
{path: 'umrah', component: UmrahComponent},
{path: 'funeral', component: FuneralComponent},
{path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
