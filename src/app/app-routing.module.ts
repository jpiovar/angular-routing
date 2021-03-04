import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentDetailComponent } from './components/component-detail/component-detail.component';
import { ComponentMainDataComponent } from './components/component-main-data/component-main-data.component';
import { ComponentMainComponent } from './components/component-main/component-main.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'main', component: ComponentMainComponent },
  { path: 'main/:id', component: ComponentDetailComponent },
  {
    path: 'main1',
    component: ComponentMainDataComponent,
    data: { title: 'component with data' }
  },
  { path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
