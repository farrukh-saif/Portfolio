export interface Experience {
  title: string;
  startDate: string;
  endDate: string;
  description: string;
  url: string;
}

export const experiences: Experience[] = [
  {
    title: "Unity/AR Developer",
    startDate: "May 2023",
    endDate: "September 2024",
    description:
      "Built educational AR apps in Unity, integrating Vuforia, EasyAR, and AR Foundation. Published apps on Play Store and App Store.",
    url: "https://example.com/",
  },
  {
    title: "Machine Learning Engineer",
    startDate: "June 2023",
    endDate: "January 2024",
    description:
      "Created a Flutter-based data annotation site with GCP. Led image annotation campaigns and automated image processing in Python.",
    url: "https://example.com/",
  },
  {
    title: "Android Development Intern",
    startDate: "June 2022",
    endDate: "October 2022",
    description:
      "Developed a Kotlin Android app for discount calculations, deployed on a POS device in Turkey.",
    url: "https://example.com/",
  },
];
