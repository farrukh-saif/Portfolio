'use client';
import { useState } from 'react';
import AudioControls from "./components/audio-controls";
import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  const [activeAudioName, setActiveAudioName] = useState<string | null>(null);

  const handleResetOthers = (currentAudio: string) => {
    setActiveAudioName(currentAudio);
  };

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

      <div className="prose prose-neutral dark:prose-invert">
      <p>⚠️ I'm building out the narration feature and yes I'm testing on production. It's my website boi . 🚧 </p>
      </div>


      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-8 mt-6">
        <h1 className="text-2xl font-medium tracking-tight">
        Hey there! I'm Farrukh 👋
        </h1>
        <AudioControls 
          audioName="test.mp3"
          activeAudioName={activeAudioName}
          onPlay={setActiveAudioName}
          resetAllExcept={handleResetOthers}
        />
      </div>

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
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-8 mt-6">
        <h1 className="text-2xl font-medium tracking-tight">
          How Do I Work?
        </h1>
        <AudioControls 
          audioName="home-page.mp3"
          activeAudioName={activeAudioName}
          onPlay={setActiveAudioName}
          resetAllExcept={handleResetOthers}
        />
      </div>

      <div className="prose prose-neutral dark:prose-invert">
        <p>Cat ipsum dolor sit amet, hunt anything that moves. Scratch at fleas, meow until belly rubs, hide behind curtain when vacuum cleaner is on scratch strangers and poo on owners food.</p>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-8">
        <h1 className="text-2xl font-medium tracking-tight">
          Let's Build Cool Shit
        </h1>
        <AudioControls 
          audioName="sora.mp3"
          activeAudioName={activeAudioName}
          onPlay={setActiveAudioName}
          resetAllExcept={handleResetOthers}
        />
      </div>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          My experience? I've built data collection pipelines, led a trash classification project with object detection, 
          and even created a chatbot website powered by a large language model.
        </p>
      </div>


    </section>
  );
}
