'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function HeroLogo() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!hovering || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const offsetX = (e.clientX - (rect.left + rect.width / 2)) / 20;
      const offsetY = (e.clientY - (rect.top + rect.height / 2)) / 20;
      setPosition({ x: offsetX, y: offsetY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [hovering]);

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full max-w-200 flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => {
        setHovering(false);
        setPosition({ x: 0, y: 0 });
      }}
    >
      <div
        className="will-change-transform"
        style={{
          transform: `translate(${hovering ? position.x : 0}px, ${hovering ? position.y : 0}px)`,
          transition: 'transform 0.8s ease-out',
        }}
      >
        <Image
          src="/logo-dark.svg"
          alt="Tomevio Logo"
          width={350}
          height={350}
          className="mx-auto"
          priority
        />
      </div>
    </div>
  );
}
