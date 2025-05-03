
"use client";

import Image from 'next/image';
import React, { useState, type ComponentType } from 'react';
import { Monitor, Keyboard, Mouse, Speaker, Calendar, Headphones, Lightbulb } from 'lucide-react';

// Define a type for the equipment data structure
interface Equipment {
  name: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
}

// Define the equipment data with explicit typing
const equipmentData: Record<string, Equipment> = {
  monitor: {
    name: 'Ultrawide Monitor',
    description: 'A large ultrawide monitor displaying a scenic view.',
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
  calendar: {
    name: 'Wall Calendar',
    description: 'A "Year 12,025" calendar hanging on the wall.',
    icon: Calendar,
  },
  decoration: {
    name: 'Wall Art & Lighting',
    description: 'Posters and a ring light decorating the wall.',
    icon: Lightbulb,
  },
  headset: {
    name: 'Headset',
    description: 'A headset hanging on the left side of the desk.',
    icon: Headphones,
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
  const hoverAreaBaseClasses = "absolute cursor-pointer rounded-md ring-1 ring-teal-500/30 hover:ring-2 hover:ring-teal-500 hover:ring-offset-2 hover:shadow-[0_0_15px_5px_rgba(59,130,246,0.5)] transition-all duration-200";
  const selectedClasses = "ring-2 ring-teal-500 ring-offset-2 shadow-[0_0_15px_5px_rgba(59,130,246,0.5)]";
  const unselectedClasses = "shadow-[0_0_8px_2px_rgba(59,130,246,0.3)]"; // Increased faint glow visibility

  return (
    <div className="flex h-screen flex-col bg-background text-foreground">
      <main className="flex flex-1 overflow-hidden">
        {/* Image Panel */}
        <div className="relative w-2/3 p-4">
          <Image
            src="https://i.ibb.co/zV6dYNg/home-office.jpg" // Updated image source
            alt="Home Office Setup"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 66vw" // Provide sizes for responsive loading
            className="rounded-lg object-contain" // Use object-contain to show the whole image
            priority // Prioritize loading this image as it's LCP
            data-ai-hint="home office desk setup"
          />

          {/* Hover areas - positions and sizes adjusted approximately */}
          {/* Monitor */}
          <div
            className={cn(
              hoverAreaBaseClasses,
              "top-[35%] left-[15%] w-[70%] h-[30%]",
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
              "bottom-[15%] left-[20%] w-[50%] h-[15%]",
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
              "bottom-[17%] left-[72%] w-[10%] h-[10%]",
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
              "bottom-[14%] left-[68%] w-[18%] h-[15%]",
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
              "bottom-[29%] left-[30%] w-[40%] h-[8%]",
              selectedEquipment === 'speakers' ? selectedClasses : unselectedClasses
            )}
            onMouseEnter={() => handleEquipmentHover('speakers')}
            onMouseLeave={() => setSelectedEquipment(null)}
             aria-label="Select Soundbar area"
          />
          {/* Calendar */}
          <div
             className={cn(
              hoverAreaBaseClasses,
              "top-[13%] left-[10%] w-[18%] h-[20%]",
              selectedEquipment === 'calendar' ? selectedClasses : unselectedClasses
            )}
            onMouseEnter={() => handleEquipmentHover('calendar')}
            onMouseLeave={() => setSelectedEquipment(null)}
             aria-label="Select Calendar area"
          />
          {/* Decoration (Wall Art & Light) */}
          <div
             className={cn(
              hoverAreaBaseClasses,
              "top-[10%] left-[35%] w-[55%] h-[25%]",
              selectedEquipment === 'decoration' ? selectedClasses : unselectedClasses
            )}
            onMouseEnter={() => handleEquipmentHover('decoration')}
            onMouseLeave={() => setSelectedEquipment(null)}
             aria-label="Select Wall Decoration area"
          />
          {/* Headset */}
          <div
             className={cn(
              hoverAreaBaseClasses,
              "top-[45%] left-[5%] w-[12%] h-[25%]",
              selectedEquipment === 'headset' ? selectedClasses : unselectedClasses
            )}
            onMouseEnter={() => handleEquipmentHover('headset')}
            onMouseLeave={() => setSelectedEquipment(null)}
             aria-label="Select Headset area"
          />
        </div>

        {/* Information Panel */}
        <div className="w-1/3 p-6 border-l border-border overflow-y-auto">
          <h1 className="text-2xl font-bold mb-6">My Desk Setup</h1>
          {selectedEquipment ? (
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                {React.createElement(equipmentData[selectedEquipment].icon, { className: "h-6 w-6 text-accent flex-shrink-0" })}
                <h2 className="text-xl font-semibold">{equipmentData[selectedEquipment].name}</h2>
              </div>
              <p className="text-sm text-muted-foreground">
                {equipmentData[selectedEquipment].description}
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center">
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
      <footer className="p-4 text-center text-xs text-muted-foreground border-t border-border">
        Vibe coded using Google Firebase Studio
      </footer>
    </div>
  );
}
