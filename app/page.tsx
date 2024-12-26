import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.linkedin} target="_blank">
        <Image
          src="/face-pic.jpg"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
      Hey there! I'm Farrukh 👋
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Soon to start my master's in {" "}
          <a href="https://uwaterloo.ca/systems-design-engineering/" target="_blank">
          Systems Design Engineering
          </a> 
          {" "}(Specialization: AI) at the{" "}
          <a href="https://uwaterloo.ca/" target="_blank">University of Waterloo</a>, Canada.
        </p>
        <p>
          I recently graduated in Computer Engineering from {" "}
          <a href="https://metu.edu.tr/" target="_blank">Middle East Technical University</a>, Turkey, 
          and I'm all about making data work smarter, not harder. Data's everywhere—we're practically drowning in it—and I believe 
          it's all about finding the signal in the noise to unlock real value.
        </p>
        <p>
          My experience? I've built data collection pipelines, led a trash classification project with object detection, 
          and even created a chatbot website powered by a large language model. One of my favorite projects was publishing a  {" "}
          <a href="https://github.com/farrukh-saif/Image-Annotation-Tool" target="_blank">fully hackable data annotation website</a> 
          {" "} and a {" "}
          <a href="https://github.com/farrukh-saif/Admin-Panel" target="_blank">slick admin panel</a> to go with it.
        </p>
        <p>
          Whether it's crafting solutions from scratch or diving deep into machine learning, I'm driven by curiosity 
          and a relentless urge to turn raw data into actionable insights. If you're into that, stick around—there's more to explore.
        </p>
      </div>


    </section>
  );
}
