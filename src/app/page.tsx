
"use client";

import Image from 'next/image';
import React, { useState, type ComponentType } from 'react';
import { Monitor, Keyboard, Mouse, Speaker, Calendar, Headphones, Lightbulb, Image as ImageIcon, Camera, ToyBrick, Radio, Usb, Anchor, Info } from 'lucide-react';
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Define a type for the equipment data structure
interface Equipment {
  name: string;
  description: string | React.ReactNode; // Allow ReactNode for description
  icon: ComponentType<{ className?: string }>;
}

// Define the equipment data with explicit typing
const equipmentData: Record<string, Equipment> = {
  monitor: {
    name: 'LG UltraWide QHD 34-Inch Curved Computer Monitor 34WQ73A-B',
    description: (
        <>
          <p>
            I prefer an ultrawide monitor over multiple monitors because the split-screen capability fits a lot onto the screen without requiring much neck movement. The HDR feature also makes it quite comfortable for the eyes. It&apos;s mounted on a boom arm.
          </p>
          <h3 className="font-semibold mt-3 mb-1">Specs:</h3>
          <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground/90">
            <li><strong>Screen Size:</strong> 34 Inches</li>
            <li><strong>Screen Resolution:</strong> 3440x1440</li>
            <li><strong>Panel Type:</strong> IPS with HDR 10 Compatibility</li>
            <li><strong>Aspect Ratio:</strong> 21:9</li>
            <li><strong>Refresh Rate:</strong> 60Hz</li>
            <li><strong>Color Gamut:</strong> sRGB 99%</li>
          </ul>
        </>
      ),
    icon: Monitor,
  },
  keyboard: {
    name: 'RGB Keyboard',
    description: 'A mechanical keyboard with colorful RGB backlighting.',
    icon: Keyboard,
  },
  mouse: {
    name: 'Gaming Mouse',
    description: 'A white gaming mouse with lighting effects.',
    icon: Mouse,
  },
  mousepad: {
    name: 'Mouse Pad',
    description: 'A patterned mouse pad providing a smooth surface.',
    icon: Mouse, // Using Mouse icon as a placeholder for MousePad
  },
  speakers: {
    name: 'Soundbar',
    description: 'A sleek soundbar placed below the monitor.',
    icon: Speaker,
  },
  wallArtLeft: {
    name: 'Giant Dragon',
    description: (
      <>
        This lighting painting is by Weishui Liu (<span className="font-semibold">@liuwishuipainting</span>).
        I enjoy his Instagram content where he often humorously leads you to expect incredible detail, only to reveal a charming caricature.
        <br /><br />
        While this painting showcases his skill, it is hidden behind a funny element, playing on that expectation.
        <br /><br />
        <div className="relative aspect-video w-full max-w-xs mx-auto my-2 rounded overflow-hidden shadow-md">
            <Image
                src="https://picsum.photos/300/169" // Placeholder image
                alt="Painting caricature humor example"
                fill
                className="object-cover"
                data-ai-hint="funny caricature art"
             />
        </div>
      </>
    ),
    icon: ImageIcon,
  },
  wallArtRight: {
    name: 'Back to Earth Poster',
    description: (
      <>
        This poster is by <span className="font-semibold">Kurzgesagt – In a Nutshell</span>.
        I&apos;m a big fan of their channel; they were one of the key inspirations behind my decision to major in Physics.
        <br /><br />
        I own several other posters from them that decorate various spots around my house, along with other merchandise like clothing.
      </>
    ),
    icon: ImageIcon,
  },
  ringLight: {
    name: 'Ring Light',
    description: "A simple ring light purchased from Amazon, primarily to avoid looking like I'm participating in meetings from a cave.",
    icon: Lightbulb,
  },
  webcam: {
    name: 'Webcam',
    description: 'MSCI gave me this one. Honestly, Earl could probably give you better specs than I can.',
    icon: Camera,
  },
  lego: {
    name: 'Lego Decoration',
    description: 'A small Lego model on the left side of the desk.',
    icon: ToyBrick,
  },
  headset: {
    name: 'Headset',
    description: 'MSCI gave me this one. Honestly, Earl could probably give you better specs than I can.', // Updated description
    icon: Headphones,
  },
  calendar: {
    name: '12,025 Human Era Calendar',
    description: (
      <>
        The 12,025 Human Era Calendar by <span className="font-semibold">Kurzgesagt – In a Nutshell</span>.
        <br /><br />
        This calendar honors humanity&apos;s collective story by adding 10,000 years to the current date, inspiring reflection on our ancestors&apos; achievements and delving into our fascinating history.
        <br /><br />
        The 2025 edition celebrates the great journey of humankind out of Africa, unfolding an epic new story each month as you track your own adventures.
      </>
    ),
    icon: Calendar,
  },
  googleHome: {
    name: 'Google Home Speaker',
    description: 'While I mostly use it for listening to Spotify, I\'m a fan of Google products—which explains my Pixel phone and why this project is being built with Google Firebase Studio.',
    icon: Radio,
  },
  usbHub: {
    name: 'USB Hub',
    description: 'A USB hub located under the monitor for connecting devices.',
    icon: Usb,
  },
  paperWeight: {
    name: 'Paper Weight',
    description: 'A decorative paper weight on the desk.',
    icon: Anchor, // Using Anchor as a placeholder icon
  },
};

// Define the type for selected equipment key
type EquipmentKey = keyof typeof equipmentData | null;

export default function Home() {
  const [selectedEquipment, setSelectedEquipment] = useState<EquipmentKey>(null);

  const handleEquipmentHover = (equipment: EquipmentKey) => {
    setSelectedEquipment(equipment);
  };

  // Common class string for hover areas
  const hoverAreaBaseClasses = "absolute cursor-pointer rounded-md ring-1 ring-teal-500/30 hover:ring-2 hover:ring-teal-500 hover:ring-offset-2 hover:shadow-[0_0_15px_5px_rgba(0,128,128,0.5)] transition-all duration-200"; // Teal glow on hover
  const selectedClasses = "ring-2 ring-teal-500 ring-offset-2 shadow-[0_0_15px_5px_rgba(0,128,128,0.5)]"; // Stronger teal glow when selected
  const unselectedClasses = "shadow-[0_0_8px_2px_rgba(0,128,128,0.4)]"; // Slightly more visible glow

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <main className="flex flex-1 flex-col md:flex-row overflow-hidden">
        {/* Image Panel - Relative container for image and hover areas */}
        <div className="w-full md:w-2/3 p-4 flex justify-center items-center">
          {/* Aspect ratio container */}
          <div className="relative w-full aspect-[16/9] max-w-full max-h-full">
            <Image
              src="/images/home_office.jpg" // Use the local image file from the public folder
              alt="Home Office Setup"
              fill
              sizes="(max-width: 768px) 100vw, 66vw" // Adjust sizes
              className="rounded-lg object-contain" // Use object-contain to show full image
              priority // Load image immediately
              data-ai-hint="home office desk setup"
            />

            {/* Hover areas - positions and sizes are percentages relative to the container above */}
             {/* Monitor */}
            <div
              className={cn(
                hoverAreaBaseClasses,
                "top-[45%] left-[30%] w-[35%] h-[25%]", // Position relative to container
                selectedEquipment === 'monitor' ? selectedClasses : unselectedClasses
              )}
              onMouseEnter={() => handleEquipmentHover('monitor')}
              onMouseLeave={() => setSelectedEquipment(null)}
              aria-label="Select Monitor area"
            />
             {/* Keyboard */}
            <div
              className={cn(
                hoverAreaBaseClasses,
                "top-[85%] left-[38%] w-[20%] h-[10%]", // Position relative to container
                selectedEquipment === 'keyboard' ? selectedClasses : unselectedClasses
              )}
              onMouseEnter={() => handleEquipmentHover('keyboard')}
              onMouseLeave={() => setSelectedEquipment(null)}
               aria-label="Select Keyboard area"
            />
            {/* Mouse */}
            <div
              className={cn(
                hoverAreaBaseClasses,
                "top-[83%] left-[59%] w-[5%] h-[10%] z-20", // Position relative to container, higher z-index
                selectedEquipment === 'mouse' ? selectedClasses : unselectedClasses
              )}
              onMouseEnter={() => handleEquipmentHover('mouse')}
              onMouseLeave={() => setSelectedEquipment(null)}
               aria-label="Select Mouse area"
            />
            {/* Mousepad */}
            <div
              className={cn(
                hoverAreaBaseClasses,
                "top-[82%] left-[57%] w-[12%] h-[13%] z-10", // Position relative to container, lower z-index
                selectedEquipment === 'mousepad' ? selectedClasses : unselectedClasses
              )}
              onMouseEnter={() => handleEquipmentHover('mousepad')}
              onMouseLeave={() => setSelectedEquipment(null)}
               aria-label="Select Mousepad area"
            />
            {/* Speakers (Soundbar) */}
            <div
              className={cn(
                hoverAreaBaseClasses,
                "top-[72%] left-[39%] w-[17%] h-[6%]", // Position relative to container
                selectedEquipment === 'speakers' ? selectedClasses : unselectedClasses
              )}
              onMouseEnter={() => handleEquipmentHover('speakers')}
              onMouseLeave={() => setSelectedEquipment(null)}
               aria-label="Select Soundbar area"
            />
            {/* Wall Art Left */}
            <div
               className={cn(
                hoverAreaBaseClasses,
                "top-[6%] left-[48%] w-[10%] h-[22%]", // Position relative to container
                selectedEquipment === 'wallArtLeft' ? selectedClasses : unselectedClasses
              )}
              onMouseEnter={() => handleEquipmentHover('wallArtLeft')}
              onMouseLeave={() => setSelectedEquipment(null)}
               aria-label="Select Left Wall Art area"
            />
             {/* Wall Art Right */}
             <div
               className={cn(
                hoverAreaBaseClasses,
                "top-[3%] left-[61%] w-[17%] h-[39%]", // Position relative to container
                selectedEquipment === 'wallArtRight' ? selectedClasses : unselectedClasses
              )}
              onMouseEnter={() => handleEquipmentHover('wallArtRight')}
              onMouseLeave={() => setSelectedEquipment(null)}
               aria-label="Select Right Wall Art area"
            />
            {/* Ring Light */}
            <div
               className={cn(
                hoverAreaBaseClasses,
                "top-[34%] left-[50%] w-[5%] h-[10%]", // Position relative to container
                selectedEquipment === 'ringLight' ? selectedClasses : unselectedClasses
              )}
              onMouseEnter={() => handleEquipmentHover('ringLight')}
              onMouseLeave={() => setSelectedEquipment(null)}
               aria-label="Select Ring Light area"
            />
             {/* Webcam */}
            <div
               className={cn(
                hoverAreaBaseClasses,
                "top-[40%] left-[45%] w-[6%] h-[5%]", // Position relative to container
                selectedEquipment === 'webcam' ? selectedClasses : unselectedClasses
              )}
              onMouseEnter={() => handleEquipmentHover('webcam')}
              onMouseLeave={() => setSelectedEquipment(null)}
               aria-label="Select Webcam area"
            />
             {/* Lego Decoration */}
             <div
               className={cn(
                hoverAreaBaseClasses,
                "top-[64%] left-[70%] w-[9%] h-[12%]", // Position relative to container
                selectedEquipment === 'lego' ? selectedClasses : unselectedClasses
              )}
              onMouseEnter={() => handleEquipmentHover('lego')}
              onMouseLeave={() => setSelectedEquipment(null)}
               aria-label="Select Lego Decoration area"
            />
            {/* Headset */}
            <div
               className={cn(
                hoverAreaBaseClasses,
                "top-[71%] left-[21%] w-[7%] h-[23%]", // Position relative to container
                selectedEquipment === 'headset' ? selectedClasses : unselectedClasses
              )}
              onMouseEnter={() => handleEquipmentHover('headset')}
              onMouseLeave={() => setSelectedEquipment(null)}
               aria-label="Select Headset area"
            />
            {/* Calendar */}
             <div
               className={cn(
                hoverAreaBaseClasses,
                "top-[1%] left-[30%] w-[12%] h-[42%]", // Adjust position for calendar
                selectedEquipment === 'calendar' ? selectedClasses : unselectedClasses
              )}
              onMouseEnter={() => handleEquipmentHover('calendar')}
              onMouseLeave={() => setSelectedEquipment(null)}
               aria-label="Select Calendar area"
            />
            {/* Google Home Speaker */}
             <div
               className={cn(
                hoverAreaBaseClasses,
                "top-[70%] left-[30%] w-[5%] h-[5%]", // Position for Google Home
                selectedEquipment === 'googleHome' ? selectedClasses : unselectedClasses
              )}
              onMouseEnter={() => handleEquipmentHover('googleHome')}
              onMouseLeave={() => setSelectedEquipment(null)}
               aria-label="Select Google Home area"
            />
            {/* USB Hub */}
             <div
               className={cn(
                hoverAreaBaseClasses,
                "top-[78%] left-[58%] w-[5%] h-[5%]", // Position for USB Hub
                selectedEquipment === 'usbHub' ? selectedClasses : unselectedClasses
              )}
              onMouseEnter={() => handleEquipmentHover('usbHub')}
              onMouseLeave={() => setSelectedEquipment(null)}
               aria-label="Select USB Hub area"
            />
             {/* Paper Weight */}
             <div
               className={cn(
                hoverAreaBaseClasses,
                "top-[73%] left-[36%] w-[4%] h-[7%]", // Position for Paper Weight (left of soundbar)
                selectedEquipment === 'paperWeight' ? selectedClasses : unselectedClasses
              )}
              onMouseEnter={() => handleEquipmentHover('paperWeight')}
              onMouseLeave={() => setSelectedEquipment(null)}
               aria-label="Select Paper Weight area"
            />
          </div>
        </div>

        {/* Information Panel */}
        <div className="w-full md:w-1/3 p-6 border-t md:border-t-0 md:border-l border-border overflow-y-auto flex-shrink-0">
          <h1 className="text-2xl font-bold mb-6">My Desk Setup</h1>
          {selectedEquipment ? (
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                {/* Use React.createElement to dynamically render the icon */}
                {React.createElement(equipmentData[selectedEquipment].icon, { className: "h-6 w-6 text-accent flex-shrink-0" })}
                <h2 className="text-xl font-semibold">{equipmentData[selectedEquipment].name}</h2>
              </div>
              {/* Check if description is string or ReactNode */}
              {typeof equipmentData[selectedEquipment].description === 'string' ? (
                <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                  {equipmentData[selectedEquipment].description}
                </p>
              ) : (
                <div className="text-sm text-muted-foreground space-y-2"> {/* Added space-y-2 for better spacing with ReactNode */}
                  {equipmentData[selectedEquipment].description}
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-center min-h-[150px] md:min-h-0"> {/* Removed h-full */}
               <Mouse className="h-12 w-12 text-muted-foreground mb-4" />
              <p className="text-lg font-medium text-muted-foreground">
                Hover over an item!
              </p>
              <p className="text-sm text-muted-foreground/80">
                Explore the different parts of the desk setup by hovering over the highlighted areas in the image.
              </p>
            </div>
          )}
        </div>
      </main>
      <footer className="p-4 text-center text-xs text-muted-foreground border-t border-border flex items-center justify-center space-x-1">
        <span>Vibe coded using Google Firebase Studio</span>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger aria-label="More information">
              <Info className="h-4 w-4 cursor-pointer" />
            </TooltipTrigger>
            <TooltipContent>
              <p>The images and the position of the boxes were set manually</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </footer>
    </div>
  );
}
