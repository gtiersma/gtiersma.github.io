export class Skill {
  constructor(
    readonly title: string,
    readonly img: string,
    readonly isPoor: boolean = false
  ) {}
}
  
export const Skills: Skill[] = [
  new Skill("title", "img", true)
]