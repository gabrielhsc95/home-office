"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import { Monitor, Keyboard, Mouse, Speaker } from 'lucide-react';

const equipmentData = {
  monitor: {
    name: 'Ultrawide Monitor',
    description: 'A 49-inch curved ultrawide monitor for immersive multitasking.',
    icon: Monitor,
  },
  keyboard: {
    name: 'Mechanical Keyboard',
    description: 'A custom mechanical keyboard with tactile switches.',
    icon: Keyboard,
  },
  mouse: {
    name: 'Ergonomic Mouse',
    description: 'An ergonomic mouse designed for comfortable all-day use.',
    icon: Mouse,
  },
  speakers: {
    name: 'Studio Speakers',
    description: 'High-quality studio speakers for clear audio.',
    icon: Speaker,
  },
};

export default function Home() {
  const [selectedEquipment, setSelectedEquipment] = useState(null);

  const handleEquipmentHover = (equipment) => {
    setSelectedEquipment(equipment);
  };

  return (
    <>
      <div className="flex h-screen bg-background text-foreground">
        {/* Image Panel */}
        <div className="relative w-2/3 p-4">
          <Image
            src="https://picsum.photos/id/1084/1200/800"
            alt="Home Office Setup"
            width={1200}
            height={800}
            className="rounded-lg object-cover"
          />
          {/* Hover areas */}
          <div
            className={`absolute top-1/4 left-1/4 w-40 h-20 cursor-pointer transition-shadow duration-200 ring-1 ring-teal-500/40 ${
              selectedEquipment === 'monitor'
                ? 'ring-2 ring-teal-500 ring-offset-2'
                : 'ring-1 ring-teal-500/20'
            }`}
            onMouseEnter={() => handleEquipmentHover('monitor')}
            onMouseLeave={() => setSelectedEquipment(null)}
          />
          <div
            className={`absolute bottom-1/4 left-1/4 w-40 h-20 cursor-pointer transition-shadow duration-200 ring-1 ring-teal-500/40 ${
              selectedEquipment === 'keyboard'
                ? 'ring-2 ring-teal-500 ring-offset-2'
                : 'ring-1 ring-teal-500/20'
            }`}
            onMouseEnter={() => handleEquipmentHover('keyboard')}
            onMouseLeave={() => setSelectedEquipment(null)}
          />
          <div
            className={`absolute top-1/2 right-1/4 w-40 h-20 cursor-pointer transition-shadow duration-200 ring-1 ring-teal-500/40 ${
              selectedEquipment === 'mouse'
                ? 'ring-2 ring-teal-500 ring-offset-2'
                : 'ring-1 ring-teal-500/20'
            }`}
            onMouseEnter={() => handleEquipmentHover('mouse')}
            onMouseLeave={() => setSelectedEquipment(null)}
          />
          <div
            className={`absolute bottom-1/4 right-1/4 w-40 h-20 cursor-pointer transition-shadow duration-200 ring-1 ring-teal-500/40 ${
              selectedEquipment === 'speakers'
                ? 'ring-2 ring-teal-500 ring-offset-2'
                : 'ring-1 ring-teal-500/20'
            }`}
            onMouseEnter={() => handleEquipmentHover('speakers')}
            onMouseLeave={() => setSelectedEquipment(null)}
          />
        </div>

        {/* Information Panel */}
        <div className="w-1/3 p-4 border-l border-border">
          {selectedEquipment ? (
            <>
              <div className="mb-4 flex items-center space-x-2">
                {equipmentData[selectedEquipment].icon && (
                  React.createElement(equipmentData[selectedEquipment].icon, { className: "h-5 w-5 text-accent" })
                )}
                <h2 className="text-xl font-semibold">{equipmentData[selectedEquipment].name}</h2>
              </div>
              <p className="text-sm text-muted-foreground">
                {equipmentData[selectedEquipment].description}
              </p>
            </>
          ) : (
            <p className="text-sm text-muted-foreground">
              Hover over an equipment area in the image to see details.
            </p>
          )}
        </div>
      </div>
      <footer className="p-4 text-center text-xs text-muted-foreground">
        Vibe coded using Google Firebase Studio
      </footer>
    </>
  );
}

