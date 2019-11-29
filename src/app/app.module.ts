import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CreateComponent } from './components/create/create.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes} from '@angular/router';
import { BarraComponent } from './components/barra/barra.component';
import { TallerComponent } from './components/taller/taller.component';
import { TiendasComponent } from './components/tiendas/tiendas.component';
import { EventosComponent } from './components/eventos/eventos.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent

  },
  {
    path: 'create',
    component:CreateComponent
  },
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path: 'taller',
    component:TallerComponent
  },{
    path: 'tiendas',
    component:TiendasComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    HomeComponent,
    BarraComponent,
    TallerComponent,
    TiendasComponent,
    EventosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
