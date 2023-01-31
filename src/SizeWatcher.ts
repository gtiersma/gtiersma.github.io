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
    this.width.value = this.element.value?.clientWidth ?? 0
  }

  private updateHeight() {
    this.height.value = this.element.value?.clientHeight ?? 0
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
}