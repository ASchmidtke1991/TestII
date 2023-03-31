import { Component } from '@angular/core';
import { FIQ } from 'src/app/Interface/fiq';
import { LpicService } from 'src/app/Shared/lpic.service';

@Component({
  selector: 'app-learn-fio',
  templateUrl: './learn-fio.component.html',
  styleUrls: ['./learn-fio.component.css']
})
export class LearnFIOComponent {
  fio: FIQ[] = []
  sa = false
  qnas = -1
  query: FIQ;
  cn = -1

  constructor(
    private fi: LpicService
  ) {
    this.fio = this.fi.getFI()

    this.cn = 0
    this.query = this.fio[this.cn]
  }
  fq() {
      this.cn = 0
      this.query = this.fio[this.cn]
  }
  pq() {
    if (0 < this.cn) {
      this.cn--
      this.query = this.fio[this.cn]
    }
  }
  nq() {
    if (this.cn < this.fio.length - 1) {
      this.cn++
      this.query = this.fio[this.cn]
      console.log(this.cn, this.query)
    }
  }
  lq() {
    this.cn = this.fio.length - 1
    this.query = this.fio[this.cn]
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
