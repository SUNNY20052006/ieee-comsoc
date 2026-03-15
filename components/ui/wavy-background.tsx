"use client";

import { useEffect, useRef, useCallback } from "react";
import { createNoise3D } from "simplex-noise";
import { cn } from "@/lib/utils";

interface WavyBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
}

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth = 50,
  backgroundFill = "transparent",
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
}: WavyBackgroundProps) => {
  const noise = createNoise3D();
  let w: number,
    h: number,
    nt: number,
    i: number,
    x: number,
    ctx: CanvasRenderingContext2D | null,
    canvas: HTMLCanvasElement | null;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number>(0);

  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  };

  const init = useCallback(() => {
    canvas = canvasRef.current;
    ctx = canvas!.getContext("2d");
    w = ctx!.canvas.width = window.innerWidth;
    h = ctx!.canvas.height = window.innerHeight;
    ctx!.filter = `blur(${blur}px)`;
    nt = 0;
    window.onresize = () => {
      w = ctx!.canvas.width = window.innerWidth;
      h = ctx!.canvas.height = window.innerHeight;
      ctx!.filter = `blur(${blur}px)`;
    };
    render();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const waveColors = colors ?? [
    "#2e7d32",
    "#388e3c",
    "#4caf50",
    "#c8e6c9",
    "#1b5e20",
  ];

  const drawWave = (n: number) => {
    nt += getSpeed();
    for (i = 0; i < n; i++) {
      ctx!.beginPath();
      ctx!.lineWidth = waveWidth;
      ctx!.strokeStyle = waveColors[i % waveColors.length];
      for (x = 0; x < w; x += 5) {
        const y = noise(x / 800, 0.3 * i, nt) * 100;
        ctx!.lineTo(x, y + h * 0.5);
      }
      ctx!.stroke();
      ctx!.closePath();
    }
  };

  const render = () => {
    ctx!.fillStyle = backgroundFill;
    ctx!.globalAlpha = waveOpacity;
    ctx!.fillRect(0, 0, w, h);
    drawWave(5);
    animationIdRef.current = requestAnimationFrame(render);
  };

  useEffect(() => {
    init();
    return () => {
      cancelAnimationFrame(animationIdRef.current);
    };
  }, [init]);

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center overflow-hidden",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={{ background: "linear-gradient(135deg, #1c2a1f 0%, #0a1f0c 50%, #1b3020 100%)" }}
      />
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
