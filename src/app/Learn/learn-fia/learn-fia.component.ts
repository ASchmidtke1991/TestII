import { Component } from '@angular/core';
import { FIQ } from 'src/app/Interface/fiq';
import { LpicService } from 'src/app/Shared/lpic.service';

@Component({
  selector: 'app-learn-fia',
  templateUrl: './learn-fia.component.html',
  styleUrls: ['./learn-fia.component.css']
})
export class LearnFIAComponent {
  fia: FIQ[] = []
  sa = false
  qnas = -1
  constructor(
    private fi: LpicService
  ) {
    this.fia = this.fi.getFI()
  }
  toggleAnswers(qid: number): void {
    if (this.qnas != qid) {
      this.qnas = qid;
      this.sa = true
    } else {
      this.sa = !this.sa
    }
  }
}
