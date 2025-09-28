import { useRef } from 'react';
import { useWarpDrive } from '@/hooks/useWarpDrive';
import { cn } from '@/lib/utils';
export function HomePage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useWarpDrive(canvasRef, {
    starCount: 8000,
    speed: 10,
    starColor: '#FFFFFF',
    backgroundColor: '#0A0514',
  });
  const hudTextStyle = cn(
    'font-mono uppercase text-neon-green',
    'text-shadow-[0_0_4px_#00FF41,0_0_8px_#00FF41,0_0_12px_#F000FF]',
    'animate-text-flicker'
  );
  return (
    <main className="min-h-screen w-full bg-space-black relative overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />
      <div className="scanline-overlay" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-4 pointer-events-none">
        <div className="absolute top-8 left-8 text-left space-y-2">
          <h2 className={cn(hudTextStyle, 'text-2xl md:text-3xl')}>WARP ENGAGED</h2>
          <p className={cn(hudTextStyle, 'text-base md:text-lg')}>FTL JUMP SEQUENCE INITIATED</p>
        </div>
        <div className="absolute bottom-8 right-8 text-right space-y-2">
          <p className={cn(hudTextStyle, 'text-base md:text-lg')}>SYSTEMS: NOMINAL</p>
          <p className={cn(hudTextStyle, 'text-base md:text-lg')}>VELOCITY: 99.9% C</p>
        </div>
        <div className="absolute bottom-8 text-center w-full">
            <p className="text-sm text-neon-green/50 font-mono">Built with ❤️ at Cloudflare</p>
        </div>
      </div>
    </main>
  );
}