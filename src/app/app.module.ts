import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import 'hammerjs';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { ProfileProvider } from './provider/profile/profile.service';
import { MatButtonToggleModule,MatExpansionModule, MatTooltipModule, MatGridListModule, MatCardModule, MatMenuModule, MatInputModule, MatButtonModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatCheckboxModule, MatFormFieldModule, MatDatepickerModule, MatProgressSpinnerModule, MatProgressBarModule, MatSelectModule, MatSlideToggleModule } from '@angular/material';
import {A11yModule} from '@angular/cdk/a11y';
import {BidiModule} from '@angular/cdk/bidi';
import {ObserversModule} from '@angular/cdk/observers';
import {OverlayModule} from '@angular/cdk/overlay';
import { SidemenuComponent } from './sidemenu/sidemenu.component';



@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent
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
  ],
  exports: [MatButtonModule, MatCheckboxModule, SidemenuComponent],
  providers: [
    ProfileProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
