import { Injectable } from '@angular/core';

import MCJson from "../../assets/LPI-2019-1-101d-QA-mc.json"
import SCJson from "../../assets/LPI-2019-1-101d-QA-sc.json"
import FIJson from "../../assets/LPI-2019-1-101d-QA-fi.json"
import AJson from "../../assets/LPI-2019-1-101d-QA-all.json"
import { MCQ } from "../../app/Interface/mcq"
import { SCQ } from "../../app/Interface/scq"
import { FIQ } from "../../app/Interface/fiq"
import { AQ } from "../../app/Interface/aq"

@Injectable({
  providedIn: 'root'
})
export class LpicService {
  qmc: MCQ[] = MCJson
  qsc: SCQ[] = SCJson
  qfi: FIQ[] = FIJson
  qa: AQ[] = AJson

  getMC(): MCQ[] {
    return this.qmc
  }
  getSC(): SCQ[] {
    return this.qsc
  }
  getFI(): FIQ[] {
    return this.qfi
  }
  getA(): AQ[] {
    return this.qa
  }
  initGivenAnswers(){
    this.qmc.map(q => q.qanswers.map(a => a.givenans = false))
    this.qsc.map(q => q.qanswers.map(a => a.givenans = false))
    this.qfi.map(q => q.qanswers.map(a => a.givenans = false))
    this.qfi.map(q => q.qgiventxt = '')
  }
  constructor() { }
}
