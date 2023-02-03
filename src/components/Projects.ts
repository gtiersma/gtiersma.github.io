export class Project {
  constructor(
    readonly title: string,
    readonly img: string,
    readonly description: string[],
    readonly action: string = ""
  ) {}

  get imgPath(): string { return `public/${ this.img }` }
  get coverImgPath(): string { return `public/cover-${ this.img }` }

  get id(): string {
    return this.title.replace(" ", "")
  }
}

export const Projects: Project[] = [
  new Project(
    "DF Studio",
    "df-studio.jpg",
    [
      "\
DF Studio is a cloud-based web application built by DigitalFusion Creative Inc. that is designed \
for (but not limited to) managing the storage, archival, distribution and communication involving \
photos belonging to enterprise corporations (usually specific to the film/entertainment industry).\
      ",
      "\
This is my first and current job as a software engineer (beginning as an internship). I have \
worked on modernizing portions of the application, building back-end tools to be used internally \
by the company, and many small fixes and improvements.\
      "
    ],
    "https://www.dfstudio.com/"
  ),
  new Project(
    "This website",
    "",
    [
      "\
Carefully programmed by hand, this website is a project of mine by itself. No website generation \
tools were used in the making of this website. However, there were external libraries made by \
others that play a part in this website (it would be far too time consuming to design all of this \
using only HTML, CSS and vanilla JavaScript).\
      ",
      "\
Libraries used in the creation of this website include Vue 3.0, Greensock's gsap for animation and \
Bootstrap for styling.\
      "
    ],
    "https://github.com/gtiersma/Portfolio"
  ),
  new Project(
    "SandPaper",
    "sandpaper.png",
    [
      "\
Create images of 3D models using only 2D images. Sand Paper takes texture images and creates a 3D \
model out of them. No need to know 3D modeling to use this program.\
      ",
      "\
SandPaper was builting using Java 8 with the JavaFx library for the GUI and 3D object generation.\
      ",
      "\
I also created a near-50 page beginner-level tutorial PDF explaining with simple terminology how \
to use the program.\
      "
    ],
    "https://github.com/gtiersma/sand-paper"
  )
]