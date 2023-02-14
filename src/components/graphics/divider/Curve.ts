import type { SizeWatcher } from "@/common/SizeWatcher"
import { computed, type ComputedRef } from "vue"

/**
 * Contains data for the svg curve that exists on the edge of the dividers.
 * 
 * ComputedRefs are used within this class when reactivity is needed.
 * 
 * Otherwise, regular getters can be used.
 */
export class Curve {

  // Specifically, the total width of svg graphics on the divider edge:
  // Responsively updates with the width: 
  private pageWidth: ComputedRef<number> | null = null

  // Distance in pixels from the right edge of the svg curve to the end of the container
  distanceFromRightEdge: ComputedRef<number> | null = null
  // Same as the above (except formatted as a string for CSS)
  rightEdgeDistanceCss: ComputedRef<string> | null = null



  /**
   * @param xStart The x position within the divider's container where the curve should start
   * @param width The width of the curve
   * @param height The height of the curve
   * @param pageWidthWatcher A SizeWatcher object that is actively watching the width of the divider's container
   */
  constructor(
    readonly xStart: number,
    readonly width: number,
    readonly height: number,
    private readonly pageWidthWatcher: SizeWatcher | undefined
  ) {
    this.pageWidth = computed(() => this.pageWidthWatcher?.width.value ?? 0)

    this.distanceFromRightEdge = computed(() => {

      // Get the entire width of the divider's container:
      const pageWidth = this.pageWidth?.value ?? 0

      // Subtract the curve's width and position to get the remaining space (which is the distance from the right edge):
      const distance = pageWidth - (this.xStart + this.width)

      // If the calculated distance is below 0, the SizeWatcher probably hasn't computed the width yet.
      // In this case, return 0 for the time being (to prevent errors from a negative value being used):
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