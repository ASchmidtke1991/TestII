export interface AQ {
    qid: number,
    qtyp: string,
    qtxt: string[],
    qanswers: LceAnswers[],
    qcorrect?: string,
    qgiventxt?: string,
    qinfo?: string[]
}
interface LceAnswers {
    txt: string[],
    correct?: boolean,
    givenans?: boolean
}

export interface FIQ {
    qid: number,
    qtyp: string,
    qtxt: string[],
    qanswers: FiAnswers[],
    qgiventxt?: string,
    qinfo: string[]
}
interface FiAnswers {
    txt: string[],
    correct?: boolean,
    givenans?: boolean
}

export interface MCQ {
    qid: number,
    qtyp: string,
    qtxt: string[],
    qanswers: McAnswers[],
    qcorrect: string,
    qinfo: string[]
}
interface McAnswers {
    txt: string[],
    correct: boolean,
    givenans?: boolean
}

export interface SCQ {
    qid: number,
    qtyp: string,
    qtxt: string[],
    qanswers: ScAnswers[],
    qcorrect: string,
    qinfo: string[]
}
interface ScAnswers {
    txt: string[],
    correct: boolean,
    givenans?: boolean
}