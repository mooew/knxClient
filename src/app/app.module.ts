import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule } from '@angular/common/http';
import { Chart } from 'chart.js';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatFormFieldModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { HvacChartComponent } from './hvac-chart/hvac-chart.component';
import { HvacInputComponent } from './hvac-input/hvac-input.component';
import { AppRoutingModule }     from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataService }      from './data.service';
import { SocketService }      from './socket.service';
import { EtsComponent } from './ets/ets.component';
import { HvacChartOpsComponent } from './hvac-chart-ops/hvac-chart-ops.component';

@NgModule({
  declarations: [
    AppComponent,
    HvacChartComponent,
    HvacInputComponent,
    DashboardComponent,
    EtsComponent,
    HvacChartOpsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    // import HttpClientModule after BrowserModule.
    HttpClientModule,AppRoutingModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,MatRadioModule,MatIconModule,MatFormFieldModule,
    ReactiveFormsModule, MatInputModule,MatSelectModule,
  ],
  providers: [DataService, SocketService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
