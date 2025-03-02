export interface Project {
  title: string;
  startDate: string;
  endDate: string;
  description: string;
  src: string;
  dialogLink: string | undefined;
  dialogDesc: string | undefined;
  buttonText: string | undefined;
  dimensions: string | undefined;
}

export const projects: Project[] = [
  {
    title: "Data Annotation Site & Admin Panel",
    startDate: "",
    endDate: "",
    description: "Built these for a data collection campaign. We gathered data from my university and paid contributors on Microworkers. Developed with Flutter and Firebase, plus other GCP services. Open-sourced (after stripping proprietary info) so others can use it.",
    src: "home-page/admin-panel.png",
    dialogLink: "https://github.com/farrukh-saif/Admin-Panel",
    dialogDesc: "Open-sourced data annotation platform with admin capabilities",
    buttonText: "View Admin Panel on GitHub",
    dimensions: undefined
  },
  {
    title: "Object Detection Project",
    startDate: "",
    endDate: "",
    description: "Fine-tuned a model to sort waste into recycling categories. Mainly used YOLO, but also tested SSD. Spent long nights with my computer running full blast, fans blowing like a jet engine (sorry, ex-roommate).",
    src: "home-page/object_detection.jpg",
    dialogLink: undefined,
    dialogDesc: "Computer vision solution for recycling automation",
    buttonText: undefined,
    dimensions: "h-[400px]"
  },
  {
    title: "Robotic Arm Reinforcement Learning Environment & Agent",
    startDate: "",
    endDate: "",
    description: "Made a custom environment for a robotic arm and trained a bot using reinforcement learning to control it. Open-sourced the code so others can use the environment too.",
    src:"home-page/ai-playing.gif",
    dialogLink:"https://syedfarrukhsaif.com/blog/training-a-robotic-arm-to-move-training-ai-in-a-custom-world",
    dialogDesc:"Trained an AI to operate a robotic arm in a custom virtual environment",
    buttonText:"Read Blog",
    dimensions: undefined
  },
  {
    title: "Augmented Reality Education Apps",
    startDate: "",
    endDate: "",
    description: "Built apps where you point your camera at cards, and 3D objects (like a dinosaur or cell) appear, blending into the real world. Created with Unity and AR SDKs.",
    src:"home-page/brainsteam.webp",
    dialogLink:"https://apps.apple.com/us/app/brainsteam-flashcards/id1486175844",
    dialogDesc: "AR educational apps with 3D object visualization",
    buttonText:"Explore on App Store",
    dimensions:"h-[400px] w-auto",
  },
  {
    title: "FireQuizzes",
    startDate: "",
    endDate: "",
    description: "A deployed quiz web app. Just drop in a new JSON file, and it auto-generates a new quiz—super fast for quick iterations based on user feedback.",
    src:"home-page/firequizzes.png",
    dialogLink:"https://firequizzes.com",
    dialogDesc:"Quiz platform for curious minds",
    buttonText:"Explore Live Demo →",
    dimensions:"w-[70vw] max-w-[500px] h-auto"
  },
  {
    title: "Orbit Ball",
    startDate: "",
    endDate: "",
    description: "A Unity game where you guide a planet around astronomical objects, trying to reach a wormhole. Uses the phone's accelerometer. Published on the Play Store.",
    src:"home-page/orbit-ball.webp",
    dialogLink:"https://play.google.com/store/apps/details?id=com.DefaultCompany.OrbitBall&hl=en_CA",
    dialogDesc:"Minimalist mobile game on the Play Stores",
    buttonText:"Download from Google Play",
    dimensions:"w-[180px] h-auto"
  },
  {
    title: "Image Filter App",
    startDate: "",
    endDate: "",
    description: "A Flutter-based mobile app that runs image processing code natively using OpenCV in C++ for efficiency. Also includes a FastAPI backend to mock a cloud-based image processor.",
    src:"home-page/image_filter_screen_recording.gif",
    dialogLink:"https://github.com/farrukh-saif/Image-Filter-App",
    dialogDesc:"Flutter app with C++ image processing",
    buttonText:"View on GitHub",
    dimensions:"h-[450px]"
  }
];
