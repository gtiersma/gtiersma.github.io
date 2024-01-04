export class Skill {
  /**
   * @param title Name of the technology
   * @param img Image file name in the skills directory (no extension) - PNG format
   * @param isPoor If true, an asterisk is added to the title to indicate beginner experience
   */
  constructor(
    readonly title: string,
    readonly img: string,
    readonly isPoor: boolean = false
  ) {}
}
  
export const Languages: Skill[] = [
  new Skill("Java", "java"),
  new Skill("Kotlin", "kotlin"),
  new Skill("Python", "python"),
  new Skill("TypeScript", "typescript"),
  new Skill("JavaScript", "javascript"),
  new Skill("JSON", "json"),
  new Skill("XML", "xml"),
  new Skill("SVG", "svg"),
  new Skill("HTML", "html"),
  new Skill("CSS", "css"),
  new Skill("SQL", "sql"),
  new Skill("Microsoft Visual Basic", "visual_basic"),
  new Skill("C#/.NET", "c_sharp", true)
]

export const Libraries: Skill[] = [
  new Skill("JavaFx", "java_fx"),
  new Skill("Vue", "vue"),
  new Skill("Vue Class Component", "vue_class_component"),
  new Skill("Vue Router", "vue_router"),
  new Skill("jQuery", "j_query"),
  new Skill("Bootstrap", "bootstrap", true),
  new Skill("GreenSock GSAP", "gsap")
]

export const Ides: Skill[] = [
  new Skill("JetBrains IntelliJ", "intellij"),
  new Skill("Microsoft Visual Studio", "visual_studio"),
  new Skill("VS Code", "vs_code"),
  new Skill("Brackets", "brackets"),
  new Skill("NetBeans", "net_beans")
]

export const Graphics: Skill[] = [
  new Skill("Adobe PhotoShop", "photo_shop"),
  new Skill("Krita", "krita", true),
  new Skill("GIMP", "gimp"),
  new Skill("Inkscape", "inkscape", true),
  new Skill("Final Cut", "final_cut")
]

export const Versions: Skill[] = [
  new Skill("Git", "git"),
  new Skill("GitHub", "git_hub")
]

export const Databases: Skill[] = [
  new Skill("PostgreSQL", "postgresql"),
  new Skill("Microsoft Access", "access"),
  new Skill("OpenOffice Base", "base"),
  new Skill("Various Data-Modeling Software", "data_modeling")
]

export const Others: Skill[] = [
  new Skill("Vite", "vite"),
  new Skill("Node Packet Manager", "npm"),
  new Skill("Yarn", "yarn", true),
  new Skill("Microsoft Office Suite", "office"),
  new Skill("Audacity", "audacity"),
  new Skill("HxD", "hxd"),
  new Skill("Slack", "slack")
]