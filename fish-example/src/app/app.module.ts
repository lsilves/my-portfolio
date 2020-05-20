import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';
import { SunflowerComponent } from './sunflower/sunflower.component';
import { WebpageDesignsComponent } from './webpage-designs/webpage-designs.component';
import { AssortedGraphicsComponent } from './assorted-graphics/assorted-graphics.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationBarComponent,
    MapComponent,
    SunflowerComponent,
    WebpageDesignsComponent,
    AssortedGraphicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCh9Ohav8Vr7vn90fwTSXHfoeKAa83cTSg'
      /* apiKey is required, unless you are a
      premium customer, in which case you can
      use clientId
      */
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
