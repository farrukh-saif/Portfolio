'use client';
import { useState } from 'react';
import AudioControls from "./components/audio-controls";
import Image from "next/image";
import { socialLinks } from "./config";
import { MyDialog } from './components/project-dialog';

export default function Page() {
  const [activeAudioName, setActiveAudioName] = useState<string | null>(null);
  let [isOpen, setIsOpen] = useState(true)
  const handleResetOthers = (currentAudio: string) => {
    setActiveAudioName(currentAudio);
  };

  return (
    <section>

{/*       
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-md dark:bg-white/10" />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="max-w-2xl space-y-4 border border-neutral-200 bg-white p-6 rounded-2xl shadow-2xl dark:border-neutral-800 dark:bg-neutral-900">
          <div className="space-y-4">
            <DialogTitle className="text-xl font-bold text-neutral-900 text-center dark:text-neutral-100">
              FireQuizzes Project
            </DialogTitle>
            
            <div className="group relative overflow-hidden rounded-lg transition-all">
              <img 
                className="w-full h-auto grayscale-[0.5] group-hover:grayscale-0 transition-all duration-300"
                src="firequizzes.png" 
                alt="Project preview" 
              />
              <div className="absolute inset-0 bg-black/40 transition-all group-hover:bg-black/20 dark:bg-neutral-900/20 dark:group-hover:bg-neutral-900/10" />
            </div>

            <div className="text-center">
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener"
                className="inline-block px-6 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-100 rounded-md transition-colors font-medium text-sm shadow-md dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-200"
              >
                Explore Live Demo →
              </a>
            </div>

            <Description className="text-neutral-600 text-center text-sm dark:text-neutral-400">
              Interactive quiz platform built with modern web technologies
            </Description>
          </div>
        </DialogPanel>
      </div>
    </Dialog> */}

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

      <h1 className="text-3xl font-medium tracking-tight">
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
        <AudioControls 
          audioName="tools-new.mp3"
          activeAudioName={activeAudioName}
          onPlay={setActiveAudioName}
          resetAllExcept={handleResetOthers}
        />
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
          <li>
            <MyDialog 
              src="home-page/object_detection.jpg" 
              desc="Fine-tuned model for waste sorting"
              dimensions="h-[400px]"
            >
              <strong>Object Detection for Trash Classification</strong>
            </MyDialog> — fine-tuned a model that helps sort waste into recycling categories
          </li>
          <li>
            <MyDialog 
              src="home-page/admin-panel.png" // Add your image path here
              desc="Data annotation platform with admin panel"
              buttonText="Explore Live Demo →"
            >
              <strong>Data Annotation Website & Admin Panel</strong>
            </MyDialog> — made it for a data collection campaign I ran to gather user preferences
          </li>
          <li>
          <MyDialog 
              src="home-page/ai-playing.gif" 
              link="https://syedfarrukhsaif.com/blog/training-a-robotic-arm-to-move-training-ai-in-a-custom-world" 
              desc="Trained an AI to operate a robotic arm in a virtual environment"
              buttonText="Read Blog"
            >
              <strong>Robotic Arm AI Agent</strong>
            </MyDialog> — trained an AI to operate a robotic arm in a virtual environment</li>
          <li>
            <MyDialog 
              src="home-page/brainsteam.webp" 
              link="https://apps.apple.com/us/app/brainsteam-flashcards/id1486175844" 
              desc="I made 2 apps like this, published on both App Store and the Play Store"
              buttonText="Explore on App Store"
              dimensions="h-[400px] w-auto"
            >
              <strong>AR Education Apps</strong>
            </MyDialog> — published apps for iOS and Android
          </li>
          <li>
            <MyDialog 
              src="home-page/firequizzes.png" 
              link="https://firequizzes.com" 
              desc="Quiz platform for curious minds"
              buttonText="Explore Live Demo →"
              dimensions="h-[330px] w-auto"
            >
              <strong>FireQuizzes</strong>
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
              <strong>Orbit Ball</strong>
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
