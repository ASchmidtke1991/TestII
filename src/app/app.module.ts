import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaComponent } from './Check/ca/ca.component';
import { CfiComponent } from './Check/cfi/cfi.component';
import { CmcComponent } from './Check/cmc/cmc.component';
import { CscComponent } from './Check/csc/csc.component';
import { EaComponent } from './Exam/ea/ea.component';
import { HomeComponent } from './home/home.component';
import { LearnFIAComponent } from './Learn/learn-fia/learn-fia.component';
import { LearnFIOComponent } from './Learn/learn-fio/learn-fio.component';
import { LearnMCAComponent } from './Learn/learn-mca/learn-mca.component';
import { LearnMCOComponent } from './Learn/learn-mco/learn-mco.component';
import { LearnSCAComponent } from './Learn/learn-sca/learn-sca.component';
import { LearnSCOComponent } from './Learn/learn-sco/learn-sco.component';
import { EMCComponent } from './Exam/emc/emc.component';
import { ESCComponent } from './Exam/esc/esc.component';
import { EFIComponent } from './Exam/efi/efi.component';

@NgModule({
  declarations: [
    AppComponent,
    CaComponent,
    CfiComponent,
    CmcComponent,
    CscComponent,
    EaComponent,
    HomeComponent,
    LearnFIAComponent,
    LearnFIOComponent,
    LearnMCAComponent,
    LearnMCOComponent,
    LearnSCAComponent,
    LearnSCOComponent,
    EMCComponent,
    ESCComponent,
    EFIComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
