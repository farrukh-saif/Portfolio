export interface Project {
  title: string;
  startDate: string;
  endDate: string;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Image Annotation Tool & Admin Panel",
    startDate: "October 2023",
    endDate: "January 2024",
    description:
      "Created a customizable, project-agnostic Flutter web application for image annotation, supporting flexible data collection for computer vision and ML projects. Developed an adaptable admin panel to manage annotation sessions, user roles, and monitor KPIs, allowing for easy customization across various applications.",
    url: "https://example.com/",
  },
  {
    title: "Object Detection Solution for Trash Segregation",
    startDate: "June 2023",
    endDate: "January 2024",
    description:
      "Developed and deployed a fine-tuned TensorFlow object detection model as a mobile app, enabling live camera-based trash classification for automatic recycling into categories like paper, metal, organic, and plastic.",
    url: "https://example.com/",
  },
  {
    title: "Novelty Detection for Movie Posters",
    startDate: "December 2022",
    endDate: "January 2023",
    description:
      "Developed a novelty detection system using an autoencoder to identify unique movies based on poster.",
    url: "https://example.com/",
  },
];
