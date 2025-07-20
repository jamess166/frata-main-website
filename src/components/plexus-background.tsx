"use client";

import React, { useRef, useEffect } from 'react';
import { useTheme } from 'next-themes';

class Point {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  radius: number;
  closest: Point[];

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.originX = x;
    this.originY = y;
    this.vx = Math.random() * 2 - 1;
    this.vy = Math.random() * 2 - 1;
    this.radius = Math.random() * 2;
    this.closest = [];
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
  }

  reset() {
    this.x = this.originX;
    this.y = this.originY;
  }
}

export const PlexusBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrameId: number;
    let points: Point[] = [];
    const mouse = { x: 0, y: 0, active: false };
    
    const colors = {
      dark: {
        points: 'rgba(51, 204, 204, 0.5)', // primary
        lines: 'rgba(51, 204, 204, 0.1)'
      },
      light: {
        points: 'rgba(0, 48, 143, 0.5)', // primary #00308F
        lines: 'rgba(0, 48, 143, 0.1)'
      }
    };
    
    const currentColors = theme === 'dark' ? colors.dark : colors.light;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      points = [];
      const numPoints = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < numPoints; i++) {
        points.push(new Point(Math.random() * canvas.width, Math.random() * canvas.height));
      }

      for (let i = 0; i < points.length; i++) {
        const p1 = points[i];
        const closest = [];
        for (let j = 0; j < points.length; j++) {
          if (i === j) continue;
          const p2 = points[j];
          let placed = false;
          for (let k = 0; k < 5; k++) {
            if (!placed) {
              if (closest[k] === undefined) {
                closest[k] = p2;
                placed = true;
              }
            }
          }

          for (let k = 0; k < 5; k++) {
            if (!placed) {
              if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                closest[k] = p2;
                placed = true;
              }
            }
          }
        }
        p1.closest = closest;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };
    
    const handleMouseOut = () => {
      mouse.active = false;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const point of points) {
        if (mouse.active) {
            const distance = getDistance(mouse, point);
            if(distance < 5000) {
                point.x -= (point.x - mouse.x) * 0.01;
                point.y -= (point.y - mouse.y) * 0.01;
            } else {
                point.update();
            }
        } else {
            point.update();
        }

        if (point.x < 0 || point.x > canvas.width || point.y < 0 || point.y > canvas.height) {
            point.reset();
        }

        ctx.beginPath();
        ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = currentColors.points;
        ctx.fill();

        for (const closestPoint of point.closest) {
          ctx.beginPath();
          ctx.moveTo(point.x, point.y);
          ctx.lineTo(closestPoint.x, closestPoint.y);
          ctx.strokeStyle = currentColors.lines;
          ctx.stroke();
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    function getDistance(p1: { x: number; y: number }, p2: { x: number; y: number }) {
      return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    }
    
    resizeCanvas();
    animate();
    
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, [theme]);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />;
};
