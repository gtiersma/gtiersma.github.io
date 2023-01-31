import { computed, ref, type ComputedRef, type Ref } from "vue"

export class CodeLine {
  private static readonly SPEED: number = 500
  private static readonly CHARS_TO_CHANGE: number = 3

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

    orderedIndices.forEach((it, i) => {
      newText = newText +
        this.nextLine[it] +
        this.text.substring(it + 1, orderedIndices[i + 1])
    })

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
    `import { ref, type Ref } from "vue"`,
    `<template>                         `,
    `<template>                         `
  ]),
  new CodeLine([
    `                                                      `,
    `  <svg class="svg" ref="titleBackground">             `,
    `  <div id="title-bar" class="navbar navbar-expand-sm">`
  ]),
  new CodeLine([
    `export class CodeLine {        `,
    `    <text                      `,
    `    <div class="navbar-header">`
  ]),
  new CodeLine([
    `  private static readonly SPEED: number = 200                                                 `,
    `      class="font"                                                                            `,
    `      <a class="navbar-brand" href="#">George Tiersma - Junior Fullstack Software Engineer</a>`
  ]),
  new CodeLine([
    `  private longestLength: number     `,
    `      v-for="(line, i) in codeLines"`,
    `    </div>                          `
  ]),
  new CodeLine([
    `  private charsLeft: number[]`,
    `      x="-20"                `,
    `  </div>                     `
  ]),
  new CodeLine([
    `  private currentIndex: number`,
    `      :y="getLineStartY(i)"   `,
    `                              `
  ]),
  new CodeLine([
    `                       `,
    `    >                  `,
    `  <div id="title-area">`
  ]),
  new CodeLine([
    `  text: Ref<string>        `,
    `      {{ line.text.value }}`,
    `    <title-background/>    `
  ]),
  new CodeLine([
    `           `,
    `    </text>`,
    `           `
  ])
]