import { Component } from '@angular/core';
import { FIQ } from 'src/app/Interface/fiq';
import { Stats } from 'src/app/Interface/stats';
import { LpicService } from 'src/app/Shared/lpic.service';
import { StatsService } from 'src/app/Shared/stats.service';

@Component({
  selector: 'app-efi',
  templateUrl: './efi.component.html',
  styleUrls: ['./efi.component.css']
})
export class EFIComponent {
  fia: FIQ[] = []
  sa = false
  qnas = -1
  query: FIQ;
  cn = -1
  statistic: Stats;
  correctInput: boolean = false;
  gotolearnmode: boolean
  learnwrong: number
  maxlearnwrong = 3

  // maxexamwrong in %
  maxexamwrong = 20
  // examwrong number of wrong questions
  examwrong: number

  examresult = false
  showResultQuestions = false

  constructor(
    private fi: LpicService,
    private stats: StatsService
  ) {
    this.fia = this.fi.getFI()
    this.fi.initGivenAnswers()

    this.statistic = this.stats.calcStatsFi()

    this.cn = 0
    this.query = this.fia[this.cn]
    this.gotolearnmode = false
    this.examwrong = 0
    this.learnwrong = 0
  }
  resetStats() {
    this.statistic = this.stats.resetStatsFi()
    this.firstQuery()
    this.gotolearnmode = false
    this.examwrong = 0
  }
  resetAnswers() {
    // reset 'givenanswer's of all questions
    this.fia.map(q => q.qanswers.map(a => a.givenans = false))
    this.resetStats()
    this.firstQuery()
    this.examwrong = 0
  }
  refreshStats() {
    this.statistic = this.stats.calcStatsFi()
  }
  firstQuery() {
    this.cn = 0
    this.query = this.fia[this.cn]
    this.sa = false
    this.refreshStats()
  }
  prevQuery() {
    if (0 < this.cn) {
      this.cn--
      this.query = this.fia[this.cn]
    }
    this.sa = false
    this.refreshStats()
  }
  nextQuery() {
    // ------------------------------------------------------
    // check if current question answered and correct -> next
    //   else update examwrong counter
    // answered?
    if (this.checkQueryFiAnswered()) {
      this.gotolearnmode = false
      if (!this.checkQueryFiAnsweredCorrect()) {
        // answered and false -> PopUp and prev question
        // examwrong + 1 (max 7)
        this.examwrong++
        // reset answers of current query - not in exam mode
        // this.query.qanswers.map(a => a.givenans = false)
        // back one query or to first query
        // this.prevQuery()
        this.refreshStats()
        console.log('Learn wrong: ', this.examwrong)
        console.log(this.examwrong,this.fia.length,this.maxexamwrong)
        if ((100 * (this.examwrong / this.fia.length)) > this.maxexamwrong) {
          // x% wrong, this is bad :( - popup and go to learn mode
          this.gotolearnmode = true
        }
        // this.setNextQuestion()
      } else { // answered and true
        // to next question
        // this.setNextQuestion()
        // }
      }
    } else {
      // not answered -> next question
    }
    this.setNextQuestion()
    // console.log('curr q: ', this.currentQnr)
  }
  setNextQuestion() {
    if (this.cn < this.fia.length - 1) {
      this.cn++
      this.query = this.fia[this.cn]
      console.log(this.cn, this.query)
    }
    this.sa = false
    this.refreshStats()
  }
  lastQuery() {
    this.cn = this.fia.length - 1
    this.query = this.fia[this.cn]
    this.sa = false
    this.refreshStats()
  }
  toggleAnswers(qid: number): void {
    if (this.qnas != qid) {
      this.qnas = qid;
      this.sa = true
    } else {
      this.sa = !this.sa
    }
    this.refreshStats()
  }
  toggleGivenAnswer(ansind: number) {
    this.query.qanswers[ansind].givenans = !this.query.qanswers[ansind].givenans
    this.refreshStats()
  }
  checkQueryFiAnswered() {
    // answered? (is one answer given 'true')
    if (this.query.qanswers.find(a => a.givenans === true)) {
      console.log('answered')
      return true
    } else {
      // not answered
      console.log('not answered')
      return false
    }
  }
  checkQueryFiAnsweredCorrect() {
    // correct answered? (are all givenans equal correct)
    if (this.query.qanswers.find(a => a.givenans != a.correct)) {
      // answered false
      console.log('answered false')
      return false
    } else {
      console.log('answered true')
      return true
    }
  }
  examEnd() {
    this.refreshStats()
    this.examresult = true
    this.sa = true
  }
  keyinput(myinput: string) {
    this.correctInput = false
    this.query.qgiventxt = myinput
    // check if correct
    if (this.query.qanswers.find(
      a => a.txt.find(t => t === this.query.qgiventxt))) {
      this.correctInput = true
    }
    console.log(this.correctInput, this.query.qgiventxt)
    this.refreshStats()
  }
}