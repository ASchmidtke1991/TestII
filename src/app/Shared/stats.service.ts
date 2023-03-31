import { Injectable } from '@angular/core';
import { AQ } from '../Interface/aq';
import { FIQ } from '../Interface/fiq';
import { MCQ } from '../Interface/mcq';
import { SCQ } from '../Interface/scq';
import { Stats } from '../Interface/stats';
import { LpicService } from './lpic.service';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  mca: MCQ[] = []
  sca: SCQ[] = []
  fia: FIQ[] = []

  qfound: AQ[] = []
  answered: AQ[] = []
  wronganswered: AQ[] = []

  qanzahl: number = -1;
  qchkfalse: number = -1;
  qanwered: boolean = false;

  stats: Stats;

  constructor(
    private qmc: LpicService,
  ) {
    this.mca = this.qmc.getMC()
    this.sca = this.qmc.getSC()
    this.fia = this.qmc.getFI()

    this.stats = {
      qmaxnumber: 0,
      qanswered: 0,
      qwrong: 0,
      qcorrect: 0,
      qnotanswered: 0
    }
  }
  nullStats(){
    this.stats.qmaxnumber = 0;
    this.stats.qanswered = 0;
    this.stats.qwrong = 0;
    this.stats.qcorrect = 0;
    this.stats.qnotanswered = 0;
  }
  resetStatsMc() {
    this.nullStats()
    return this.calcStatsMc();
  }
  resetStatsSc() {
    this.nullStats()
    return this.calcStatsSc();
  }
  resetStatsFi() {
    this.nullStats()
    return this.calcStatsFi();
  }
  calcStatsMc() {
    this.stats.qmaxnumber = this.mca.length
    if (this.mca.findIndex(q => q.qanswers.findIndex(a => a.givenans === true))
      > 0) {
      this.stats.qanswered = this.mca.filter(q => q.qanswers.findIndex(
        a => a.givenans === true) != -1).length
    }
    this.stats.qnotanswered = this.stats.qmaxnumber - this.stats.qanswered;
    this.answered = this.mca.filter(q => q.qanswers.findIndex(a => a.givenans === true) > -1)
    this.wronganswered = this.answered.filter(
      q => q.qanswers.findIndex(
        a => a.correct != a.givenans) > -1)
    this.stats.qcorrect = this.answered.length - this.wronganswered.length
    this.stats.qwrong = this.wronganswered.length
    return this.stats;
  }
  calcStatsSc() {
    this.stats.qmaxnumber = this.sca.length
    if (this.sca.findIndex(q => q.qanswers.findIndex(a => a.givenans === true))
      > 0) {
      this.stats.qanswered = this.sca.filter(q => q.qanswers.findIndex(
        a => a.givenans === true) != -1).length
    }
    this.stats.qnotanswered = this.stats.qmaxnumber - this.stats.qanswered;
    this.answered = this.sca.filter(q => q.qanswers.findIndex(a => a.givenans === true) > -1)
    this.wronganswered = this.answered.filter(
      q => q.qanswers.findIndex(
        a => a.correct != a.givenans) > -1)
    this.stats.qcorrect = this.answered.length - this.wronganswered.length
    this.stats.qwrong = this.wronganswered.length
    return this.stats;
  }
  calcStatsFi() {
    this.stats.qmaxnumber = this.fia.length
    this.stats.qanswered = this.fia.filter(q => q.qgiventxt != '').length
    this.stats.qnotanswered = this.stats.qmaxnumber - this.stats.qanswered;
    this.stats.qcorrect = this.fia.filter(
      q => q.qanswers.find(
        a => a.txt.find(t => t === q.qgiventxt))).length
    this.stats.qwrong = this.stats.qanswered - this.stats.qcorrect
    return this.stats;
  }
}
