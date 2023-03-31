import { Component } from '@angular/core';
import { MCQ } from '../../Interface/mcq';
import { LpicService } from '../../Shared/lpic.service';
import { Stats } from 'src/app/Interface/stats';
import { StatsService } from 'src/app/Shared/stats.service';

@Component({
  selector: 'app-cmc',
  templateUrl: './cmc.component.html',
  styleUrls: ['./cmc.component.css']
})
export class CmcComponent {
  qmc: MCQ[] = []
  sa = false
  na = -1
  query: MCQ;
  cn = -1
  statistic: Stats;
  learnwrong: number
  maxlearnwrong = 2

  constructor(
    private mc: LpicService,
    private stats: StatsService
  ) {
    this.qmc = this.mc.getMC()
    this.mc.initGivenAnswers()

    this.statistic = this.stats.calcStatsMc()

    this.cn = 0
    this.query = this.qmc[this.cn]

    this.learnwrong = 0
  }

  resetStats() {
    this.statistic = this.stats.resetStatsMc()
    this.fq()
  }
  refreshStats() {
    this.statistic = this.stats.calcStatsMc()
  }
  fq() {
    this.cn = 0
    this.query = this.qmc[this.cn]
    this.sa = false
    this.refreshStats()
  }
  pq() {
    if (0 < this.cn) {
      this.cn--
      this.query = this.qmc[this.cn]
    }
    this.sa = false
    this.refreshStats()
  }
  nq() {
    if (this.cn < this.qmc.length - 1) {
      this.cn++
      this.query = this.qmc[this.cn]
      console.log(this.cn, this.query)
    }
    this.sa = false
    this.refreshStats()
  }
  setnq() {
    if (this.cn < this.qmc.length - 1) {
      this.cn++
      this.query = this.qmc[this.cn]
      console.log(this.cn, this.query)
    }
    this.sa = false
    this.refreshStats()
  }
  lq() {
    this.cn = this.qmc.length - 1
    this.query = this.qmc[this.cn]
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

  toggleAns(ansind: number) {
    this.query.qanswers[ansind].givenans = !this.query.qanswers[ansind].givenans
    this.refreshStats()
  }
  checkQueryMcAnswered() {
    if (this.query.qanswers.find(a => a.givenans === true)) {
      console.log('answered')
      return true
    } else {
      console.log('not answered')
      return false
    }
  }
  checkQueryMcAnsweredCorrect() {
    if (this.query.qanswers.find(a => a.givenans != a.correct)) {
      console.log('answered false')
      return false
    } else {
      console.log('answered true')
      return true
    }
  }
}