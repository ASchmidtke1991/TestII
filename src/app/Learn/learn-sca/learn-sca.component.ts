import { Component } from '@angular/core';
import { SCQ } from 'src/app/Interface/scq';
import { LpicService } from 'src/app/Shared/lpic.service';

@Component({
  selector: 'app-learn-sca',
  templateUrl: './learn-sca.component.html',
  styleUrls: ['./learn-sca.component.css']
})
export class LearnSCAComponent {
  sca: SCQ[] = []
  sa = false
  qnas = -1
  query: SCQ;
  cn = -1

  constructor(
    private sc: LpicService
  ) {
    this.sca = this.sc.getSC()

    this.cn = 0
    this.query = this.sca[this.cn]
  }
  fq() {
      this.cn = 0
      this.query = this.sca[this.cn]
  }
  pq() {
    if (0 < this.cn) {
      this.cn--
      this.query = this.sca[this.cn]
    }
  }
  nq() {
    if (this.cn < this.sca.length - 1) {
      this.cn++
      this.query = this.sca[this.cn]
      console.log(this.cn, this.query)
    }
  }
  lq() {
    this.cn = this.sca.length - 1
    this.query = this.sca[this.cn]
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