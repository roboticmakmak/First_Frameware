import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { PortifolioComponent } from './portifolio/portifolio.component';
import { AccountComponent } from './Account/Account.component';

@NgModule({
  declarations: [							
    AppComponent,
      HomeComponent,
      NavBarComponent,
      FooterComponent,
      AboutComponent,
      PortifolioComponent,
      AccountComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
