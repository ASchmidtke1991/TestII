import { Component } from '@angular/core';
import { SCQ } from 'src/app/Interface/scq';
import { Stats } from 'src/app/Interface/stats';
import { LpicService } from 'src/app/Shared/lpic.service';
import { StatsService } from 'src/app/Shared/stats.service';

@Component({
  selector: 'app-csc',
  templateUrl: './csc.component.html',
  styleUrls: ['./csc.component.css']
})
export class CscComponent {
  qsc: SCQ[] = []
  sa = false
  na = -1
  query: SCQ;
  cn = -1

  statistic: Stats;


  constructor(
    private sca: LpicService,
    private stats: StatsService
  ) {
    this.qsc = this.sca.getSC()
    this.sca.initGivenAnswers()

    this.cn = 0
    this.query = this.qsc[this.cn]

    this.statistic = this.stats.calcStatsSc()
  }
  resetStats() {
    this.statistic = this.stats.resetStatsSc()
    this.fq()
  }
  refreshStats() {
    this.statistic = this.stats.calcStatsSc()
  }
  fq() {
    this.cn = 0
    this.query = this.qsc[this.cn]
    this.sa = false
    this.refreshStats()
  }
  pq() {
    if (0 < this.cn) {
      this.cn--
      this.query = this.qsc[this.cn]
    }
    this.sa = false
    this.refreshStats()
  }
  nq() {
    if (this.cn < this.qsc.length - 1) {
      this.cn++
      this.query = this.qsc[this.cn]
      console.log(this.cn, this.query)
    }
    this.sa = false
    this.refreshStats()
  }
  lq() {
    this.cn = this.qsc.length - 1
    this.query = this.qsc[this.cn]
    this.sa = false
    this.refreshStats()
  }
  toggleA(qid: number): void {
    if (this.na != qid) {
      this.na = qid;
      this.sa = true
    } else {
      this.sa = !this.sa
    }
    this.refreshStats()
  }
  changeGivenAnswer(ansind: number) {
    this.query.qanswers.map(ans => ans.givenans = false)
    this.query.qanswers[ansind].givenans = !this.query.qanswers[ansind].givenans
    this.refreshStats()
  }
}
