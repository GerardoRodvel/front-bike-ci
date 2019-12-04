import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { BarraComponent } from './components/barra/barra.component';
import { TiendasComponent } from './components/tiendas/tiendas.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'tiendas',
    component: TiendasComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BarraComponent,
    TiendasComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
