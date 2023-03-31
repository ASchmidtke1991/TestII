import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LearnFIAComponent } from './Learn/learn-fia/learn-fia.component';
import { LearnFIOComponent } from './Learn/learn-fio/learn-fio.component';
import { LearnMCAComponent } from './Learn/learn-mca/learn-mca.component';
import { LearnMCOComponent } from './Learn/learn-mco/learn-mco.component';
import { LearnSCOComponent } from './Learn/learn-sco/learn-sco.component'; 
import { LearnSCAComponent } from './Learn/learn-sca/learn-sca.component';
import { CaComponent } from './Check/ca/ca.component';
import { CmcComponent } from './Check/cmc/cmc.component';
import { CscComponent } from './Check/csc/csc.component';
import { CfiComponent } from './Check/cfi/cfi.component';
import { HomeComponent } from './home/home.component';
import { EaComponent } from './Exam/ea/ea.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'LearnFIA', component: LearnFIAComponent},
  { path: 'LearnFIO', component: LearnFIOComponent},
  { path: 'LearnMCA', component: LearnMCAComponent},
  { path: 'LearnMCO', component: LearnMCOComponent},
  { path: 'LearnSCA', component: LearnSCAComponent},
  { path: 'LearnSCO', component: LearnSCOComponent},
  { path: 'CFI', component: CfiComponent},
  { path: 'CMC', component: CmcComponent},
  { path: 'CSC', component: CscComponent},
  { path: 'CA', component: CaComponent},
  { path: 'EA', component: EaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
