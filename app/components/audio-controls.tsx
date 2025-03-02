'use client';
import { useState, useRef, useEffect } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import H5AudioPlayer from 'react-h5-audio-player';
import { RiResetLeftLine } from "react-icons/ri";

export default function AudioControls({ 
    audioName,
    activeAudioName,
    onPlay,
    resetAllExcept
  }: { 
    audioName: string;
    activeAudioName: string | null;
    onPlay: (name: string) => void;
    resetAllExcept: (name: string) => void;
  }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasEnded, setHasEnded] = useState(true);
    const [hasStarted, setHasStarted] = useState(false);
    const audioRef = useRef<H5AudioPlayer | null>(null);
  
    // Reset only if WE'RE NOT the active player
    useEffect(() => {
      if (activeAudioName && activeAudioName !== audioName) {
        handleReplay();
      }
    }, [activeAudioName]);
  
    const handlePlayPause = () => {
      if (!isPlaying) {
        // Tell parent to reset others
        resetAllExcept(audioName);
        audioRef.current?.audio.current?.play();
      } else {
        audioRef.current?.audio.current?.pause();
      }
    };
  const handleReplay = () => {
    if (audioRef.current?.audio.current) {
      audioRef.current.audio.current.pause();
      audioRef.current.audio.current.currentTime = 0;
      setIsPlaying(false);
      setHasEnded(true);
      setHasStarted(false);
    }
  };

  return (
    <>
      <AudioPlayer
        ref={audioRef}
        src={`/${audioName}`}
        className="hidden"
        onPlay={() => {
          setIsPlaying(true);
          setHasEnded(false);
          setHasStarted(true);
        }}
        onPause={() => setIsPlaying(false)}
        onEnded={() => {
          handleReplay();
          onPlay(''); // Notify parent playback ended
        }}
      />

      <div className="flex items-center gap-2">
        <button
          onClick={handlePlayPause}
          className="px-3 py-1 text-sm rounded-full bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors"
        >
          {hasEnded ? 'Narrate' : isPlaying ? 'Pause' : 'Resume'}
        </button>

        {hasStarted && !hasEnded && (
          <button
            onClick={handleReplay}
            className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors"
          >
            <RiResetLeftLine className="w-4 h-4" />
          </button>
        )}
      </div>
    </>
  );
}