import { readonly } from "vue";

export class Faq {
  constructor(
    readonly question: string,
    readonly answer: string
  ) {}
}

export const Faqs: Faq[] = [
  new Faq("question", "answer")
]