export class TitleBar {
  public static MIN_HEIGHT: number = 10
  public static MAX_HEIGHT: number = 500

  public startY: number
  public height: number

  public gradient: BarGradient

  constructor(containerHeight: number) {
    this.startY = this.getStartY(containerHeight)
    this.height = this.getHeight()

    this.gradient = new BarGradient()
  }

  private getStartY(containerHeight: number): number {
    return Math.random() * containerHeight
  }

  private getHeight(): number {
    return Math.random() * (TitleBar.MAX_HEIGHT - TitleBar.MIN_HEIGHT) + TitleBar.MIN_HEIGHT
  }
}

export class BarGradient {
  public static POINT_COUNT: number = 3

  public startX: number
  public startY: number
  public endX: number
  public endY: number

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

  private getRandom(): number {
    return Math.ceil(Math.random() * 100)
  }
}

export class BarGradientPoint {
  public point: number
  public opacity: number

  constructor(random1: number, random2: number) {
    this.point = random1
    this.opacity = random2
  }

  get pointPercentage(): string { return `${ this.point }%` }
}