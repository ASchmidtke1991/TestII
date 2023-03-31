import { Component } from '@angular/core';
import { FIQ } from 'src/app/Interface/fiq';
import { Stats } from 'src/app/Interface/stats';
import { LpicService } from 'src/app/Shared/lpic.service';
import { StatsService } from 'src/app/Shared/stats.service';

@Component({
  selector: 'app-cfi',
  templateUrl: './cfi.component.html',
  styleUrls: ['./cfi.component.css']
})
export class CfiComponent {
  qfi: FIQ[] = []
  sa = false
  na = -1
  query: FIQ;
  cn = -1
  statistic: Stats;
  correctInput: boolean = false;

  constructor(
    private fi: LpicService,
    private stats: StatsService
  ) {
    this.qfi = this.fi.getFI()
    this.fi.initGivenAnswers()

    this.cn = 0
    this.query = this.qfi[this.cn]

    this.statistic = this.stats.resetStatsFi()
  }


  keyinput(myinput: string) {
    this.correctInput = false
    this.query.qgiventxt = myinput
    if (this.query.qanswers.find(
      a => a.txt.find(t => t === this.query.qgiventxt))) {
      this.correctInput = true
    }
    console.log(this.correctInput, this.query.qgiventxt)
    this.refreshStats()
  }
  resetStats() {
    this.statistic = this.stats.resetStatsFi()
    this.fq()
  }
  refreshStats() {
    this.statistic = this.stats.calcStatsFi()
  }
  fq() {
    this.cn = 0
    this.query = this.qfi[this.cn]
    this.sa = false
    this.refreshStats()
  }
  pq() {
    if (0 < this.cn) {
      this.cn--
      this.query = this.qfi[this.cn]
    }
    this.sa = false
    this.refreshStats()
  }
  nq() {
    if (this.cn < this.qfi.length - 1) {
      this.cn++
      this.query = this.qfi[this.cn]
      console.log(this.cn, this.query)
    }
    this.sa = false
    this.refreshStats()
  }
  lq() {
    this.cn = this.qfi.length - 1
    this.query = this.qfi[this.cn]
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
