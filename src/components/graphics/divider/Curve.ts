import type { SizeWatcher } from "@/common/SizeWatcher"
import { computed, type ComputedRef } from "vue"

export class Curve {
  private pageWidth: ComputedRef<number> | null = null
  distanceFromRightEdge: ComputedRef<number> | null = null
  rightEdgeDistanceCss: ComputedRef<string> | null = null

  constructor(
    readonly xStart: number,
    readonly width: number,
    readonly height: number,
    private readonly pageWidthWatcher: SizeWatcher | undefined
  ) {
    this.pageWidth = computed(() => this.pageWidthWatcher?.width.value ?? 0)

    this.distanceFromRightEdge = computed(() => {
      const pageWidth = this.pageWidth?.value ?? 0
      const distance = pageWidth - (this.xStart + this.width)
      return distance < 0 ? 0 : distance
    })

    this.rightEdgeDistanceCss = computed(() =>
      `${ this.distanceFromRightEdge?.value }px`
    )
  }
  
  get xStartCss(): string { return `${ this.xStart }px` }
  get widthCss(): string { return `${ this.width }px` }
  get heightCss(): string { return `${ this.height }px` }
}