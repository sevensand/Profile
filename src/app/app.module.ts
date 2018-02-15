import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import 'hammerjs';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { ProfileProvider } from './provider/profile/profile.service';
import { MatButtonToggleModule,MatExpansionModule, MatChipsModule, MatTableModule, MatSliderModule, MatNativeDateModule, MatTooltipModule, MatGridListModule, MatCardModule, MatMenuModule, MatInputModule, MatButtonModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatCheckboxModule, MatFormFieldModule, MatDatepickerModule, MatProgressSpinnerModule, MatProgressBarModule, MatSelectModule, MatSlideToggleModule } from '@angular/material';
import {A11yModule} from '@angular/cdk/a11y';
import {BidiModule} from '@angular/cdk/bidi';
import {ObserversModule} from '@angular/cdk/observers';
import {OverlayModule} from '@angular/cdk/overlay';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { TopheaderComponent } from './topheader/topheader.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutComponent } from './components/about/about.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactusComponent } from './components/contactus/contactus.component';

import { FusionChartsModule } from 'angular2-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import { ServicesComponent } from './components/services/services.component';



FusionChartsModule.fcRoot(FusionCharts, Charts, FintTheme);

@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    TopheaderComponent,
    DashboardComponent,
    AboutComponent,
    PortfolioComponent,
    ContactusComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatInputModule,
    MatButtonToggleModule,
    MatCardModule,
    MatExpansionModule,
    MatGridListModule,
    MatTooltipModule,
    MatNativeDateModule,
    MatChipsModule,
    MatSliderModule,
    MatTableModule,
    AppRoutingModule,
    FusionChartsModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports: [MatButtonModule, MatCheckboxModule, SidemenuComponent, TopheaderComponent],
  providers: [
    ProfileProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
