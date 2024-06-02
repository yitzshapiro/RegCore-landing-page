import { FlipWords } from './components/ui/Flipwords';
import { Vortex } from './components/ui/vortex';
import { Button } from './components/ui/moving-border';
import { Meteors } from './components/ui/meteors';
import { HoverBorderGradient } from './components/ui/hover-border-gradient';
import { Boxes } from './components/ui/background-boxes';
import { cn } from './utils/cn';
import './App.css';

function App() {
  const words = ['faster', 'easier', 'intuitive'];

  return (
    <>
      <div className="flex justify-between w-full px-4 sm:px-10 pt-4 sm:pt-10">
        <div className='place-self-start'>
          <img className="w-16 sm:w-24" src="logo.png" alt="RegCore Logo"></img>
        </div>
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="bg-black dark:text-white flex place-self-end space-x-2"
        >
          <span>Contact Us</span>
        </HoverBorderGradient>
      </div>
      <Vortex
        backgroundColor="black"
        className="vortex-container flex items-center justify-center flex-col h-screen dark"
        rangeY={900}
        particleCount={50}
        baseHue={1020}
      >
        <div className="flex flex-col items-center justify-center px-4 text-center">
          <div className="text-3xl sm:text-5xl font-bold text-neutral-600 dark:text-neutral-400">
            Regulatory Submissions, but <br />
            <FlipWords words={words} duration={2000} />
          </div>
          <br />
          <p className="font-normal text-zinc-200">
            RegCore makes regulatory content compilation and management a
            breeze.
          </p>
        </div>
        <br />
        <Button
          borderRadius="1.75rem"
          className="font-normal dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
          Book a Demo
        </Button>
      </Vortex>
      <div id="boxes" className="boxes-container">
        <Boxes className="opacity-60"/>
      </div>
      <h1 className={cn('text-4xl font-bold text-white relative z-20 mb-20 text-center')}>
        Our Product
      </h1>
      <div id="products" className="flex flex-wrap justify-center gap-8 sm:space-y-0 sm:space-x-8 mb-40">
        <div className="w-full sm:w-auto relative max-w-xs">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-zinc-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-2 w-2 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>

            <h1 className="font-bold text-xl text-white mb-4 relative z-50">
              One-Click eCTD Organization
            </h1>

            <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
              Sort your raw documents into a proper electronic Common Technical Document (eCTD) format with just one click. RegCore’s intelligent automation simplifies the compilation process, saving you time and reducing errors.
            </p>

            {/* Meaty part - Meteor effect */}
            <Meteors number={20} />
          </div>
        </div>
        <div className="w-full sm:w-auto relative max-w-xs">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-zinc-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-2 w-2 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>

            <h1 className="font-bold text-xl text-white mb-4 relative z-50">
              Real-Time Updates
            </h1>

            <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
              Stay informed with automatic updates from regulatory bodies. RegCore ensures you receive the latest information related to your submissions in progress, keeping you compliant and ahead of any changes.
            </p>
            {/* Meaty part - Meteor effect */}
            <Meteors number={20} />
          </div>
        </div>
        <div className="w-full sm:w-auto relative max-w-xs">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-zinc-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-2 w-2 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>

            <h1 className="font-bold text-xl text-white mb-4 relative z-50">
              Seamless Integration
            </h1>

            <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
              RegCore integrates effortlessly with your existing RIM systems. Enhance your current workflows with our powerful sorting and tracking capabilities without disrupting your established processes.
            </p>
            {/* Meaty part - Meteor effect */}
            <Meteors number={20} />
          </div>
        </div>
      </div>
      <br />
      <p className="text-center">© 2024 RegCore, Inc. All rights reserved.</p>
    </>
  );
}

export default App;
