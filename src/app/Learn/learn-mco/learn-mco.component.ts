import { Component } from '@angular/core';

import { MCQ } from 'src/app/Interface/mcq';
import { LpicService } from '../../Shared/lpic.service';

@Component({
  selector: 'app-learn-mco',
  templateUrl: './learn-mco.component.html',
  styleUrls: ['./learn-mco.component.css']
})
export class LearnMCOComponent {
  mco: MCQ[] = []
  sa = false
  qnas = -1
  query: MCQ;
  cn = -1

  constructor(
    private ql101sc: LpicService
  ) {
    this.mco = this.ql101sc.getSC()

    this.cn = 0
    this.query = this.mco[this.cn]
  }
  pq() {
    if (0 < this.cn) {
      this.cn--
      this.query = this.mco[this.cn]
    }
  }
  nq() {
    if (this.cn < this.mco.length - 1) {
      this.cn++
      this.query = this.mco[this.cn]
      console.log(this.cn, this.query)
    }
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
