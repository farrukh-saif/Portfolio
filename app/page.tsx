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
{/* 
      <div className="prose prose-neutral dark:prose-invert">
      <p>⚠️ I'm building out the narration feature and yes I'm testing on production. It's my website boi I does what I wish to. 🚧 </p>
      </div> */}

      <h1 className="text-2xl font-medium tracking-tight">
        Hey there! I'm Farrukh 👋
      </h1>

      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-8 mt-6">
        <h1 className="text-2xl font-medium tracking-tight">
          Who am I?
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
          Just a regular dude who's into tech and is tryna have a fun time on Earth. Did my undergrad in <strong>Computer Engineering at ODTÜ</strong> in Turkey. Moved to <strong>Canada {Math.floor((-new Date('2024-09-06').getTime() + new Date().getTime()) / (1000 * 60 * 60 * 24 * 30))} months ago</strong>. Starting my <strong>Master’s in AI at the University of Waterloo</strong> this Spring. My experience spans <strong>machine learning, software development, and augmented reality</strong>. The type of nerd who reads research papers for fun and builds because curiosity won’t let me do otherwise.
        </p>
        
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-8 mt-6">
          <h1 className="text-2xl font-medium tracking-tight">
            Tools of the trade
          </h1>
        </div>
        <div className="prose prose-neutral dark:prose-invert">
        <div className="flex flex-col justify-center items-center gap-3">
          <img className="h-10 grayscale-[0.5] hover:grayscale-[0]" src="https://skillicons.dev/icons?i=py,pytorch,sklearn,selenium,anaconda,unity" alt="My Skills" />
          <img className="h-10 grayscale-[0.5] hover:grayscale-[0]" src="https://skillicons.dev/icons?i=tensorflow,opencv,flutter,firebase,react,androidstudio" alt="My Skills" />
          <img className="h-10 grayscale-[0.5] hover:grayscale-[0]" src="https://skillicons.dev/icons?i=cs,docker,gcp,arduino,git,mysql" alt="My Skills" />
        </div>
        <p className="text-center text-sm italic">
          These might be tools I've used extensively in the past, but believe me when I say that my tools are just that, my tools. It's the problem that matters, I'll learn whatever it takes.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-8 mt-6">
        <h1 className="text-2xl font-medium tracking-tight">
          Cool Shit I've Built
        </h1>
        <AudioControls 
          audioName="home-page.mp3"
          activeAudioName={activeAudioName}
          onPlay={setActiveAudioName}
          resetAllExcept={handleResetOthers}
        />
      </div>

      <div className="prose prose-neutral dark:prose-invert">
        <ul>
          <li><strong>Object Detection for Trash Classification</strong> — fine-tuned a model that helps sort waste into recycling categories.</li>
          <li><strong>Robotic Arm AI Agent</strong> — trained an AI to operate a robotic arm in a virtual environment.</li>
          <li><strong>Arduino Musical Instrument</strong> — hacked together a DIY instrument for fun.</li>
          <li><strong>Orbit Ball</strong> — minimalist mobile game on the Play Store.</li>
          <li><strong>AR Education Apps</strong> — published apps for iOS and Android.</li>
          <li><strong>FireQuizzes</strong> — a quiz web app for curious minds.</li>
          <li><strong>Binary Adder in Minecraft</strong> — yep, it works in-game.</li>
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-8 mt-8">
        <h1 className="text-2xl font-medium tracking-tight">
          Let's Build Cool Shit Together
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
          All I’m sayin’ is: if you want some half-baked code that barely works—hire ChatGPT. But if you want someone <strong>curious, relentless, and dependable</strong> enough to turn ideas into reality, I’m your guy. {" "}
          <a href="mailto:syedfarrukhsaif@gmail.com">Let's talk.</a>
        </p>
      </div>

    </section>
  );
}
