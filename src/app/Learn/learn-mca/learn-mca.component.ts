import { Component } from '@angular/core';

import { LpicService } from '../../Shared/lpic.service';
import { MCQ } from 'src/app/Interface/mcq';

@Component({
  selector: 'app-learn-mca',
  templateUrl: './learn-mca.component.html',
  styleUrls: ['./learn-mca.component.css']
})
export class LearnMCAComponent {
  mca: MCQ[] = []
  sa = false
  qnas = -1
  constructor(
    private mc: LpicService
  ) {
    this.mca = this.mc.getMC()
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
