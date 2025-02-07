'use client';
import { useState, useEffect } from 'react';
import { Dialog, DialogPanel, Description, DialogTitle } from '@headlessui/react';

export function MyDialog({
  src,
  link,
  desc,
  children,
  dimensions = 'max-h-[80vh] w-auto', // Default dimensions
  buttonText = 'Explore Live Demo →'
}: {
  src: string;
  link?: string;
  desc: string;
  children: React.ReactNode;
  dimensions?: string;
  buttonText?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [maxWidth, setMaxWidth] = useState('max-w-[90vw]'); // Fallback for SSR

  useEffect(() => {
    // Get image natural dimensions after load
    const img = new Image();
    img.src = src;
    img.onload = () => {
      const aspectRatio = img.naturalWidth / img.naturalHeight;
      setMaxWidth(aspectRatio > 1 ? 
        'max-w-[min(90vw,800px)]' : // Landscape
        'max-w-[min(90vw,500px)]'  // Portrait
      );
    };
  }, [src]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="underline sm:no-underline underline-offset-4 text-left"
      >
        {children}
      </button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md dark:bg-white/10" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel 
            className={`w-auto ${maxWidth} space-y-4 border border-neutral-200 bg-white p-6 rounded-2xl shadow-2xl dark:border-neutral-800 dark:bg-neutral-900 transition-[max-width] duration-300`}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="sm:hidden absolute right-5 top-5 p-2 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="space-y-4">
              <DialogTitle className="text-xl font-bold text-neutral-900 text-center dark:text-neutral-100">
                Project Preview
              </DialogTitle>
              
              <div className="group relative overflow-hidden rounded-lg transition-all flex justify-center items-center">
                <img 
                  className={`${dimensions} grayscale-[0.5] rounded-lg group-hover:grayscale-0 transition-all duration-300 object-contain`}
                  src={src}
                  alt="Project preview" 
                />
              </div>

              {link && (
                <div className="text-center">
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener"
                    className="inline-block px-6 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-100 rounded-md transition-colors font-medium text-sm shadow-md dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-200"
                  >
                    {buttonText}
                  </a>
                </div>
              )}

              <Description className="text-neutral-600 text-center text-sm dark:text-neutral-400">
                {desc}
              </Description>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}