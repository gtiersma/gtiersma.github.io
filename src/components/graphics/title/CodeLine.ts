export class CodeLine {
  private static readonly SPEED: number = 500
  private static readonly CHARS_TO_CHANGE: number = 5

  private longestLength: number
  private charsLeft: number[]
  private currentIndex: number

  private isChangingChar: boolean
  private intervalId: number

  text: string

  isReadyForNextLine: boolean

  constructor(private readonly lines: string[]) {
    this.longestLength = lines.reduce((a, b) =>
      a.length > b.length ? a : b
    ).length

    this.charsLeft = []

    this.currentIndex = 0

    this.isChangingChar = false
    this.intervalId = -1

    this.text = lines[0]
    this.isReadyForNextLine = false
  }

  private setCharsLeft() {
    this.charsLeft = Array.from(
      { length: this.longestLength },
      (x, i) => i
    )
  }

  private getCharIndices() {
    const indices = []
    for (
      let i = 0;
      i < CodeLine.CHARS_TO_CHANGE && this.charsLeft.length > 0;
      i++
    ) {
      const charLeftIndex = Math.floor(Math.random() * this.charsLeft.length)
      indices.push(this.charsLeft[charLeftIndex])
      this.charsLeft.splice(charLeftIndex, 1)
    }
    return indices
  }

  private getUpdatedText(charIndices: number[]): string {
    const orderedIndices: number[] = charIndices.sort((a, b) => a - b)

    let newText = this.text.substring(0, orderedIndices[0])

    orderedIndices.forEach((it, i) => 
      newText = newText +
        this.nextLine[it] +
        this.text.substring(it + 1, orderedIndices[i + 1])
    )

    return newText
  }

  private changeChar() {
    if (!this.isChangingChar) {
      this.isChangingChar = true

      const charIndices = this.getCharIndices()
    
      this.text = this.getUpdatedText(charIndices)
    
      if (this.isDone) this.wrapUpLineChange()

      this.isChangingChar = false
    }
  }

  changeLine() {
    this.isReadyForNextLine = false
    this.setCharsLeft()
    this.intervalId = setInterval(
      () => this.changeChar(),
      CodeLine.SPEED
    )
  }

  private wrapUpLineChange() {
    this.currentIndex++
    if (this.currentIndex >= this.lines.length) {
      this.currentIndex = 0
    }

    clearInterval(this.intervalId)
    this.isReadyForNextLine = true
  }

  private get nextLine(): string {
    return this.lines[this.currentIndex + 1] ?? this.lines[0]
  }
  private get isDone(): boolean { return this.text == this.nextLine }
}

export const CodeLines: CodeLine[] = [
  new CodeLine([
    `export class CodeLine { private static readonly SPEED: number = 500; private static readonly CHARS_TO_CHANGE: number = 3;`,
    `<template><svg class="svg far-back" ref="titleBackground"><text                                                          `,
    `<template><div id="title-bar" class="navbar navbar-expand-sm far-far-front"><div class="navbar-header">                  `
  ]),
  new CodeLine([
    `private longestLength: number; private charsLeft: number[]; private currentIndex: number;           `,
    `class="font" v-for="(line, i) in codeLines" x="20"                                                  `,
    `<a class="navbar-brand" href="#">George Tiersma - Junior Fullstack Software Engineer</a></div></div>`
  ]),
  new CodeLine([
    `private isChangingChar: boolean; private intervalId: number; text: string;   `,
    `:y="getLineStartY(i)">{{ line.text }}</text>                                 `,
    `<div id="title-area"><title-background/><h1 class="title">George Tiersma</h1>`
  ]),
  new CodeLine([
    `isReadyForNextLine: boolean; constructor(private readonly lines: string[]) { this.longestLength = lines.reduce((a, b) =>                       `,
    `</svg><fa-icon class="icon back" id="chip" icon="fa-solid fa-microchip"/><fa-icon class="icon back" id="wrench" icon="fa-solid fa-wrench"/>    `,
    `<h1 id="bottom-title" class="title">Junior Fullstack Software Engineer</h1><button class="btn btn-primary far-front">View Resume</button></div>`
  ]),
  new CodeLine([
    `a.length > b.length ? a : b ).length; this.charsLeft = [];         `,
    `<svg class="svg front"><rect :id="${"`bar${ i }`"}"                     `,
    `</template><script setup lang="ts">import { onMounted } from 'vue';`
  ]),
  new CodeLine([
    `this.currentIndex = 0; this.isChangingChar = false; this.intervalId = -1;                                  `,
    `class="bar" ref="bars" v-for="i in BAR_COUNT"                                                              `,
    `import gsap from 'gsap'; import ScrollTrigger from "gsap/ScrollTrigger"; gsap.registerPlugin(ScrollTrigger)`
  ]),
  new CodeLine([
    `this.text = lines[0]; this.isReadyForNextLine = false; } private setCharsLeft() {`,
    `:y="barStartYs[i]" :height="barHeights[i]"/>                                     `,
    `onMounted(() => { gsap.to(#title-bar",                                           `
  ]),
  new CodeLine([
    `this.charsLeft = Array.from( { length: this.longestLength }, (x, i) => i ); }`,
    `</svg></template><script setup lang="ts">                                    `,
    `{ scrollTrigger: { trigger: "#bottom-title", start: "bottom top",            `
  ]),
  new CodeLine([
    `private getCharIndices() { const indices = []; for ( `,
    `import { onMounted, reactive,                        `,
    `toggleActions: "play none none reverse" }, y: 100 } )`
  ]),
  new CodeLine([
    `let i = 0; i < CodeLine.CHARS_TO_CHANGE && this.charsLeft.length > 0; i++`,
    `ref, watch, type Ref                                                     `,
    `})</script><style scoped>                                                `
  ])
]