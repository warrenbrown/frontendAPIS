import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@workshop/material';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { StadiumsModule } from './stadiums/stadiums.module';
import { MlbCardsModule } from './mlb-cards/mlb-cards.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled'}),
    BrowserAnimationsModule,
    MaterialModule,
    StadiumsModule,
    HomeModule,
    MlbCardsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
