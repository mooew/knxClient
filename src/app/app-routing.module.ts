import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HvacChartComponent }   from './hvac-chart/hvac-chart.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { EtsComponent }   from './ets/ets.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'chart', component: HvacChartComponent },
  { path: 'ets', component: EtsComponent },

];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
