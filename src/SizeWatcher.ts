import { ref, type Ref } from "vue";

export class SizeWatcher {
  width: Ref<number> = ref(0)
  height: Ref<number> = ref(0)

  private timeoutId: number

  constructor(
    readonly element: Ref<HTMLElement | null>,
    readonly watchWidth: boolean = false,
    readonly watchHeight: boolean = false
  ) {
    this.timeoutId = -1
  }

  private updateSize() {
    if (this.watchWidth) this.updateWidth()
    if (this.watchHeight) this.updateHeight()
  }

  private updateWidth() {
    const element = this.element.value
    if (!!element && !!this.computedStyle) {
      const widthWithPadding = element.clientWidth

      this.width.value = widthWithPadding -
        parseFloat(this.computedStyle.paddingLeft) -
        parseFloat(this.computedStyle.paddingRight)
    }
  }

  private updateHeight() {
    const element = this.element.value
    if (!!element && !!this.computedStyle) {
      const heightWithPadding = element.clientHeight
      
      this.height.value = heightWithPadding -
        parseFloat(this.computedStyle.paddingTop) -
        parseFloat(this.computedStyle.paddingBottom)
    }
  }

  private handleTimeout() {
    if (this.timeoutId !== -1) {
      clearTimeout(this.timeoutId)
    }
    this.timeoutId = setTimeout(
      () => this.updateSize(),
      200
    )
  }

  start() {
    this.updateSize()
    window.addEventListener(
      "resize",
      () => this.handleTimeout()
    )
  }

  private get computedStyle(): CSSStyleDeclaration | null {
    const element = this.element.value
    if (!element) return null
    return getComputedStyle(element)
  }
}