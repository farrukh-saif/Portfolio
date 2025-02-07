export interface Experience {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  description: string;
  url: string;
}

export const experiences: Experience[] = [
  {
    company: "BrainSTEAM",
    title: "Unity/AR Developer",
    startDate: "May 2023",
    endDate: "September 2024",
    description:
      "Built educational AR apps in Unity, integrating Vuforia, EasyAR, and AR Foundation. Published apps on Play Store and App Store.",
    url: "https://brainsteamedu.com/",
  },
  {
    company: "Ülkem Elektronik",
    title: "Machine Learning Engineer",
    startDate: "June 2023",
    endDate: "January 2024",
    description:
      "Created a Flutter-based data annotation platform along with a corresponding admin panel on GCP, leading image annotation campaigns with microworkers and automating image processing and web scraping workflows using Python.",
    url: "https://www.ulkem.com.tr/",
  },
  {
    company: "Token Financial Technologies",
    title: "Android Development Intern",
    startDate: "June 2022",
    endDate: "October 2022",
    description:
      "Developed a Kotlin Android app for discount calculations, deployed on a POS device in Turkey.",
    url: "https://www.tokeninc.com/en-us/",
  },
];
