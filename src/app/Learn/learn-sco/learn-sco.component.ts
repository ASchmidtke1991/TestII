import { Component } from '@angular/core';
import { SCQ } from 'src/app/Interface/scq';
import { LpicService } from 'src/app/Shared/lpic.service';

@Component({
  selector: 'app-learn-sco',
  templateUrl: './learn-sco.component.html',
  styleUrls: ['./learn-sco.component.css']
})
export class LearnSCOComponent {
  sco: SCQ[] = []

  sa = false
  qnas = -1
  query: SCQ;
  cn = -1

  constructor(
    private sc: LpicService
  ) {
    this.sco = this.sc.getSC()

    this.cn = 0
    this.query = this.sco[this.cn]
  }
  fq() {
    this.cn = 0
    this.query = this.sco[this.cn]
  }
  pq() {
    if (0 < this.cn) {
      this.cn--
      this.query = this.sco[this.cn]
    }
  }
  nq() {
    if (this.cn < this.sco.length - 1) {
      this.cn++
      this.query = this.sco[this.cn]
      console.log(this.cn, this.query)
    }
  }
  lq() {
    this.cn = this.sco.length - 1
    this.query = this.sco[this.cn]
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
