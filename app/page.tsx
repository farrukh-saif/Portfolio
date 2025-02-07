'use client';
import { useState } from 'react';
import AudioControls from "./components/audio-controls";
import Image from "next/image";
import { socialLinks } from "./config";
import { MyDialog } from './components/project-dialog';

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

      <h1 className="sm:text-3xl text-2xl font-medium tracking-tight">
        Hey there! I'm Farrukh 👋
      </h1>

      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-8 mt-6">
        <h1 className="text-2xl font-medium tracking-tight">
          Who am I?
        </h1>
        <AudioControls 
          audioName="home-page/whoami.mp3"
          activeAudioName={activeAudioName}
          onPlay={setActiveAudioName}
          resetAllExcept={handleResetOthers}
        />
      </div>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Just a regular dude who's into AI and tech, tryna have a good time on Earth. Did my undergrad in <strong>Computer Engineering at ODTÜ</strong> in Turkey and moved to <strong>Canada {Math.floor((-new Date('2024-09-06').getTime() + new Date().getTime()) / (1000 * 60 * 60 * 24 * 30))} months ago</strong>. Starting my <strong>Master’s studying AI at the University of Waterloo</strong> this Spring.
        </p>
        <p>
        I'm the type of nerd who reads research papers for fun and loves building stuff. My experience spans <strong>machine learning, software development, and augmented reality</strong>—but <strong>AI is where I thrive</strong>. Whether it’s <strong>extracting insights from data, training models, working with LLMs, or setting up data pipelines</strong>, I’m your man. 
        </p>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-8 mt-6">
        <h1 className="text-2xl font-medium tracking-tight">
          Tools of the Trade
        </h1>
        <AudioControls 
          audioName="home-page/tools.mp3"
          activeAudioName={activeAudioName}
          onPlay={setActiveAudioName}
          resetAllExcept={handleResetOthers}
        />
      </div>

      <div className="prose prose-neutral dark:prose-invert">
        <div className="flex flex-col justify-center items-center gap-3">
          {/* If I wanna add new technologies I can use this line - Caching to speed up */}
          {/* <img className="h-10 grayscale-[0.5] hover:grayscale-[0]" src="https://skillicons.dev/icons?i=py,pytorch,sklearn,selenium,anaconda,unity" alt="My Skills" /> */}
          
          <img className="h-10 grayscale-[0.5] hover:grayscale-[0]" src="home-page/icons.svg" alt="My Skills" />
          <img className="h-10 grayscale-[0.5] hover:grayscale-[0]" src="home-page/icons-1.svg" alt="My Skills" />
          <img className="h-10 grayscale-[0.5] hover:grayscale-[0]" src="home-page/icons-2.svg" alt="My Skills" />
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
          audioName="home-page/projects.mp3"
          activeAudioName={activeAudioName}
          onPlay={setActiveAudioName}
          resetAllExcept={handleResetOthers}
        />
      </div>

      <div className="prose prose-neutral dark:prose-invert">
        <ul>
          <li>
            <MyDialog 
              src="home-page/object_detection.jpg" 
              desc="Fine-tuned model for waste sorting"
              dimensions="h-[400px]"
            >
              <strong className="underline sm:no-underline underline-offset-4">Object Detection Project</strong>
            </MyDialog> — fine-tuned a model that helps sort waste into recycling categories
          </li>
          <li>
            <MyDialog 
              src="home-page/admin-panel.png" // Add your image path here
              desc="Data annotation platform with admin panel"
              link="https://github.com/farrukh-saif/Admin-Panel"
              buttonText="View Admin Panel on GitHub"
            >
              <strong className="underline sm:no-underline underline-offset-4">Data Annotation Site & Admin Panel</strong>
            </MyDialog> — made it for a data collection campaign I ran to gather user preferences
          </li>
          <li>
          <MyDialog 
              src="home-page/ai-playing.gif" 
              link="https://syedfarrukhsaif.com/blog/training-a-robotic-arm-to-move-training-ai-in-a-custom-world" 
              desc="Trained an AI to operate a robotic arm in a virtual environment"
              buttonText="Read Blog"
            >
              <strong className="underline sm:no-underline underline-offset-4">Robotic Arm AI Agent</strong>
            </MyDialog> — trained an AI to operate a robotic arm in a virtual environment</li>
          <li>
            <MyDialog 
              src="home-page/brainsteam.webp" 
              link="https://apps.apple.com/us/app/brainsteam-flashcards/id1486175844" 
              desc="I made 2 apps like this, published on both App Store and the Play Store"
              buttonText="Explore on App Store"
              dimensions="h-[400px] w-auto"
            >
              <strong className="underline sm:no-underline underline-offset-4">AR Education Apps</strong>
            </MyDialog> — published apps for iOS and Android
          </li>
          <li>
            <MyDialog 
              src="home-page/firequizzes.png" 
              link="https://firequizzes.com" 
              desc="Quiz platform for curious minds"
              buttonText="Explore Live Demo →"
              dimensions="w-[70vw] max-w-[500px] h-auto"
            >
              <strong className="underline sm:no-underline underline-offset-4">FireQuizzes</strong>
            </MyDialog> — a quiz web app for curious minds
          </li>
          <li>
            <MyDialog 
              src="home-page/orbit-ball.webp" 
              link="https://play.google.com/store/apps/details?id=com.DefaultCompany.OrbitBall&hl=en_CA" 
              desc="Minimalist mobile game on the Play Stores"
              buttonText="Download from Google Play"
              dimensions="w-[180px] h-auto"
            >
              <strong className="underline sm:no-underline underline-offset-4">Orbit Ball</strong>
            </MyDialog> — minimalist mobile game on the Play Store
          </li>
          <li>
              <strong>Arduino Musical Instrument</strong> — hacked together a DIY instrument for fun
          </li>
          <li><strong>Binary Adder in Minecraft</strong> — yep, it works in-game</li>
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-8 mt-8">
        <h1 className="text-2xl font-medium tracking-tight">
          Let's Build Cool Shit Together
        </h1>
        <AudioControls 
          audioName="home-page/lets-build.mp3"
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
