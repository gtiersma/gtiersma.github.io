/**
 * A line of code in the title background animation
 * 
 * The line of code slowly changes over time to a different line of code (a few characters at a time).
 */
export class CodeLine {

  // Specifically, how many milliseconds should it wait till it changes the next batch of characters
  private static readonly SPEED: number = 500
  // The number of characters that the line of code should change at once
  private static readonly CHARS_TO_CHANGE: number = 5

  // Number of characters long each line is
  private length: number
  // The indices of characters in the current line that have yet to be changed to the character in the next line
  private charsLeft: number[]

  // The index of the current line that is being change
  private currentIndex: number

  // Whether of not a group of characters is currently in the process of being changed
  // Used to prevent the chance of setInterval triggering multiple batches of characters to change at the same time
  private isChangingChars: boolean
  private intervalId: number

  // The line of code in its current transformation state. For display.
  text: string

  // Whether or not this CodeLine has finished transforming the line of code to the next line of code
  // and is ready to do it again
  isReadyForNextLine: boolean

  /**
   * @param lines An array of lines of code to transform between. MUST ALL BE EQUAL LENGTH
   */
  constructor(private readonly lines: string[]) {
    this.length = lines[0].length

    this.charsLeft = []

    this.currentIndex = 0

    this.isChangingChars = false
    this.intervalId = -1

    this.text = lines[0]
    this.isReadyForNextLine = false
  }

  /**
   * Reset the charsLeft array to list all indices of characters that a line of code would have
   */
  private setCharsLeft() {
    this.charsLeft = Array.from(
      { length: this.length },
      (x, i) => i
    )
  }

  /**
   * Gets a batch of indices of characters to change in the line of code
   */
  private getCharIndices(): number[] {
    const indices = []

    // For the number of indices in a batch (or however many indices are left if there's not enough for a full batch):
    for (
      let i = 0;
      i < CodeLine.CHARS_TO_CHANGE && this.charsLeft.length > 0;
      i++
    ) {
      // Pick an index of a character to change at random:
      const charLeftIndex = Math.floor(Math.random() * this.charsLeft.length)

      indices.push(this.charsLeft[charLeftIndex])

      // Remove that character index from the array so that it won't get picked again:
      this.charsLeft.splice(charLeftIndex, 1)
    }

    return indices
  }

  /**
   * Gets the line code in its current state with the parameterized character indexes updated to the next line
   */
  private getUpdatedText(charIndices: number[]): string {

    // Sort the character indices. This is importent when doing substring operations below
    const orderedIndices: number[] = charIndices.sort((a, b) => a - b)

    // Get a substring of the line of code leading up to the first character to change:
    let newText = this.text.substring(0, orderedIndices[0])

    // For each character index, append the character from the next code line onto newText
    // along with a substring of the text leading to the next character index.
    orderedIndices.forEach((it, i) => 
      newText = newText +
        this.nextLine[it] +
        this.text.substring(it + 1, orderedIndices[i + 1])
    )

    return newText
  }

  /**
   * Changes a batch of random characters in the current code line to those of the next code line
   * 
   * isChangingChars is used to prevent asynchronous issues of this running multiple times at the same time.
   */
  private changeChars() {
    if (!this.isChangingChars) {
      this.isChangingChars = true

      // Get a batch of indices to change in the current line
      const charIndices = this.getCharIndices()
    
      // Update the line of code with those indices change from the next line
      this.text = this.getUpdatedText(charIndices)
    
      if (this.isDone) this.wrapUpLineChange()

      this.isChangingChars = false
    }
  }

  /**
   * Begin changing the current line of code to the next line of code
   * 
   * Do not call if this class is currently changing a line of code.
   * In other words, should only be called when isReadyForNextLine is true.
   */
  changeLine() {
    this.isReadyForNextLine = false
    this.setCharsLeft()
    this.intervalId = setInterval(
      () => this.changeChars(),
      CodeLine.SPEED
    )
  }

  /**
   * Clean-up code for after a line of code has finished transforming into the next line of code
   */
  private wrapUpLineChange() {
    this.currentIndex++

    // Loop the currentIndex back to 0 if the last index was reached:
    if (this.currentIndex >= this.lines.length) {
      this.currentIndex = 0
    }

    clearInterval(this.intervalId)
    this.isReadyForNextLine = true
  }

  /**
   * The line of code that the current line of code is in the process of being transformed to
   */
  private get nextLine(): string {
    return this.lines[this.currentIndex + 1] ?? this.lines[0]
  }

  /**
   * Not to be confused with isReadyForNextLine:
   * 
   * isReadyForNextLine = clean-up has been performed
   * isDone = clean-up has not necessarily been performed yet
   */
  private get isDone(): boolean { return this.text == this.nextLine }
}

/**
 * I just copied my own code from this file and its parents into here (padding them with spaces to make them equal length)
 * 
 * The first index of each array parameter is a string of a line in this file
 * The second index is a string of a line from this file's parent
 * The third index is a line from this file's grandparent
 */
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