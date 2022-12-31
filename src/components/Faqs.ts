import { readonly } from "vue";

export class Faq {
  question: string
  answer: string

  constructor(question: string, answer: string) {
    this.question = question
    this.answer = answer
  }
}

export const Faqs: Faq[] = [
  new Faq("question", "answer")
]