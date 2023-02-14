/**
 * CURRENTLY NOT USED - BROKEN
 * 
 * Tight on time, so I didn't have time to get this working
 * 
 * These are meant to be large, mostly-transparent, white-tv-static bars that were to slowly move up in front of everything
 * (like an old tv would have). It was going a subtle effect to go over the title area. It had to be cut because it's not an
 * importent effect, and I can't justify spending the time to get it to work at the moment.
 */
export class TitleBar {

  // The smallest and largest possible size of a title bar:
  public static MIN_HEIGHT: number = 10
  public static MAX_HEIGHT: number = 500

  // The starting position of the bar on the Y axis:
  public startY: number
  public height: number

  public gradient: BarGradient

  /**
   * @param containerHeight The height of the container of these title bars (maybe should be a SizeWatcher?)
   */
  constructor(containerHeight: number) {
    this.startY = this.getStartY(containerHeight)
    this.height = this.getHeight()

    this.gradient = new BarGradient()
  }

  /**
   * Get a random starting position on the y axis
   */
  private getStartY(containerHeight: number): number {
    return Math.random() * containerHeight
  }

  /**
   * Get a random height
   */
  private getHeight(): number {
    return Math.random() * (TitleBar.MAX_HEIGHT - TitleBar.MIN_HEIGHT) + TitleBar.MIN_HEIGHT
  }
}

/**
 * Contains data related to the white-to-transparent gradient a bar would have
 */
export class BarGradient {
  // The number of points to be used in the virtual "line" of this gradient
  public static POINT_COUNT: number = 3

  // The starting and ending coordinates of the virtual "line" of this gradient
  public startX: number
  public startY: number
  public endX: number
  public endY: number

  // Points in the virtual "line" where the gradient should change
  public points: BarGradientPoint[]

  constructor() {
    this.startX = this.getRandom()
    this.startY = this.getRandom()
    this.endX = this.getRandom()
    this.endY = this.getRandom()

    this.points = []
    for (let i = 0; i < BarGradient.POINT_COUNT; i++) {
      this.points.push(
        new BarGradientPoint(
          this.getRandom(),
          this.getRandom()
        )
      )
    }
  }

  // Get a random number between 1 and 100. Used for picking a variety random values.
  private getRandom(): number {
    return Math.ceil(Math.random() * 100)
  }
}

/**
 * A point in the gradient where the gradient's effect should strengthen or lessen
 */
export class BarGradientPoint {

  // Number from 1-100 of how far down the gradient should this change occur
  public point: number

  // Number from 1-100 of how opaque the gradient should change at this point
  public opacity: number

  /**
   * @param random1 Random number 1-100
   * @param random2 Random number 1-100
   */
  constructor(random1: number, random2: number) {
    this.point = random1
    this.opacity = random2
  }

  /**
   * The point in percentage form
   */
  get pointPercentage(): string { return `${ this.point }%` }
}