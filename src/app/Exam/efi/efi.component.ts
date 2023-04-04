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
  ql101Fiall: FIQ[] = []
  sa = false
  queryNrAnswersShow = -1
  query: FIQ;
  currentQnr = -1
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
    private ql101Fi: LpicService,
    private stats: StatsService
  ) {
    this.ql101Fiall = this.ql101Fi.getFI()
    this.ql101Fi.initGivenAnswers()

    this.statistic = this.stats.calcStatsFi()

    this.currentQnr = 0
    this.query = this.ql101Fiall[this.currentQnr]
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
    this.ql101Fiall.map(q => q.qanswers.map(a => a.givenans = false))
    this.resetStats()
    this.firstQuery()
    this.examwrong = 0
  }
  refreshStats() {
    this.statistic = this.stats.calcStatsFi()
  }
  firstQuery() {
    this.currentQnr = 0
    this.query = this.ql101Fiall[this.currentQnr]
    this.sa = false
    this.refreshStats()
  }
  prevQuery() {
    if (0 < this.currentQnr) {
      this.currentQnr--
      this.query = this.ql101Fiall[this.currentQnr]
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
        console.log(this.examwrong,this.ql101Fiall.length,this.maxexamwrong)
        if ((100 * (this.examwrong / this.ql101Fiall.length)) > this.maxexamwrong) {
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
    if (this.currentQnr < this.ql101Fiall.length - 1) {
      this.currentQnr++
      this.query = this.ql101Fiall[this.currentQnr]
      console.log(this.currentQnr, this.query)
    }
    this.sa = false
    this.refreshStats()
  }
  lastQuery() {
    this.currentQnr = this.ql101Fiall.length - 1
    this.query = this.ql101Fiall[this.currentQnr]
    this.sa = false
    this.refreshStats()
  }
  toggleAnswers(qid: number): void {
    if (this.queryNrAnswersShow != qid) {
      this.queryNrAnswersShow = qid;
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