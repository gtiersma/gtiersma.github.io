import { computed, ref, type ComputedRef, type Ref } from "vue"

export class CodeLine {
  private static readonly SPEED: number = 200

  private longestLength: number
  private charsLeft: number[]
  private currentIndex: number

  private isChangingChar: boolean
  private intervalId: number

  text: Ref<string>

  isReadyForNextLine: Ref<boolean> = ref(false)

  constructor(private readonly lines: string[]) {
    this.longestLength = lines.reduce((a, b) =>
      a.length > b.length ? a : b
    ).length

    this.charsLeft = []

    this.currentIndex = 0

    this.isChangingChar = false
    this.intervalId = -1

    this.text = ref(lines[0])
  }

  private setCharsLeft() {
    this.charsLeft = Array.from(
      { length: this.longestLength },
      (x, i) => i
    )
  }

  private changeChar() {
    if (!this.isChangingChar) {
      this.isChangingChar = true
      const charLeftIndex = Math.floor(Math.random() * this.charsLeft.length)
      const charIndex = this.charsLeft[charLeftIndex]
      this.charsLeft.splice(charLeftIndex, 1)
    
      this.text.value =
        this.text.value.substring(0, charIndex) +
        this.nextLine[charIndex] +
        this.text.value.substring(charIndex + 1)
    
      if (this.isDone) {
        this.currentIndex++
        clearInterval(this.intervalId)
        this.isReadyForNextLine.value = true
      }

      this.isChangingChar = false
    }
  }

  changeLine() {
    this.setCharsLeft()
    this.intervalId = setInterval(
      () => this.changeChar(),
      CodeLine.SPEED
    )
  }

  private get nextLine(): string { return this.lines[this.currentIndex + 1] }
  private get isDone(): boolean { return this.text.value == this.nextLine }
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