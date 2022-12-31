export class Project {
  constructor(
    readonly title: string,
    readonly img: string,
    readonly description: string,
    readonly action: string = ""
  ) {}
}

export const Projects: Project[] = [
  new Project("title", "img", "description", "action")
]