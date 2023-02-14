export class Project {

  /**
   * @param title Header text
   * @param img Image used in carousel
   * @param description Paragraphs
   * @param link URL for button (No button is displayed if empty value)
   */
  constructor(
    readonly title: string,
    readonly img: string,
    readonly description: string[],
    readonly link: string = ""
  ) {}

  get imgPath(): string { return `projects/${ this.img }` }

  // A blurred version of the image that is used for placing the text over
  // The file must have the same name as the img (except it begins with "cover-").
  get coverImgPath(): string { return `projects/cover-${ this.img }` }
}

export const Projects: Project[] = [
  new Project(
    "DF Studio",
    "df-studio.jpg",
    [
      "\
DF Studio is a cloud-based, web application built by DigitalFusion Creative Inc. Its purpose is to \
provide for basic management, archival, distribution and communication of photos in a secure and \
efficient manner. It is a B2B software subscription popular among businesses in the entertainment/\
film industry.\
      ",
      "\
This is my first and current job as a software engineer (beginning as an internship). I have \
worked on modernizing portions of the application, building back-end tools, and many small fixes \
and improvements.\
      "
    ],
    "https://www.dfstudio.com/"
  ),
  new Project(
    "This website",
    "website.png",
    [
      "\
Carefully programmed by hand, this website is a project of mine by itself.\
      ",
      "\
Libraries used in the creation of this website include the Vue 3.0 composition API, Greensock's \
gsap for animation.\
      "
    ]
  ),
  new Project(
    "SandPaper",
    "sandpaper.png",
    [
      "\
Create images of 3D models using only 2D textures. No need to know 3D modeling to use this program. \
Essentially, it is a terrain generation program with the focus of being as simple to use as \
possible while being able to create more than just ground surfaces.\
      ",
      "\
SandPaper was built using Java 8 with the JavaFx library for the GUI and 3D object generation.\
      ",
      "\
I also created a beginner-level tutorial PDF (close to 50 pages) explaining with simple \
terminology how to use the program.\
      "
    ],
    "https://github.com/gtiersma/sand-paper"
  )
]