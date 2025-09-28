import { useRef, useEffect } from 'react';
interface WarpDriveOptions {
  starCount?: number;
  speed?: number;
  starColor?: string;
  backgroundColor?: string;
}
class Star {
  x: number;
  y: number;
  z: number;
  z_speed: number;
  x_projected: number;
  y_projected: number;
  scale_projected: number;
  constructor(width: number, height: number, speed: number) {
    this.x = Math.random() * width - width / 2;
    this.y = Math.random() * height - height / 2;
    this.z = Math.random() * width;
    this.z_speed = speed;
    this.x_projected = 0;
    this.y_projected = 0;
    this.scale_projected = 0;
  }
  update(width: number, height: number, speed: number) {
    this.z_speed = speed;
    this.z -= this.z_speed;
    if (this.z <= 0) {
      this.x = Math.random() * width - width / 2;
      this.y = Math.random() * height - height / 2;
      this.z = width;
    }
    const fov = width * 0.8;
    this.scale_projected = fov / (fov + this.z);
    this.x_projected = this.x * this.scale_projected + width / 2;
    this.y_projected = this.y * this.scale_projected + height / 2;
  }
  draw(ctx: CanvasRenderingContext2D, starColor: string) {
    if (
      this.x_projected >= 0 &&
      this.x_projected <= ctx.canvas.width &&
      this.y_projected >= 0 &&
      this.y_projected <= ctx.canvas.height
    ) {
      ctx.fillStyle = starColor;
      ctx.beginPath();
      ctx.arc(this.x_projected, this.y_projected, this.scale_projected * 2, 0, Math.PI * 2);
      ctx.fill();
      // Streaking effect
      ctx.beginPath();
      ctx.moveTo(this.x_projected, this.y_projected);
      const length = this.z_speed * this.scale_projected * 2;
      const dx = (this.x / this.z) * length;
      const dy = (this.y / this.z) * length;
      ctx.lineTo(this.x_projected + dx, this.y_projected + dy);
      ctx.lineWidth = this.scale_projected * 2;
      ctx.strokeStyle = starColor;
      ctx.stroke();
    }
  }
}
export const useWarpDrive = (
  canvasRef: React.RefObject<HTMLCanvasElement>,
  options: WarpDriveOptions = {}
) => {
  const {
    starCount = 5000,
    speed = 5,
    starColor = '#FFFFFF',
    backgroundColor = '#0A0514',
  } = options;
  const starsRef = useRef<Star[]>([]);
  const animationFrameId = useRef<number>();
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const setup = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      starsRef.current = [];
      for (let i = 0; i < starCount; i++) {
        starsRef.current.push(new Star(canvas.width, canvas.height, speed));
      }
    };
    const animate = () => {
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      starsRef.current.forEach(star => {
        star.update(canvas.width, canvas.height, speed);
        star.draw(ctx, starColor);
      });
      animationFrameId.current = requestAnimationFrame(animate);
    };
    const handleResize = () => {
      cancelAnimationFrame(animationFrameId.current!);
      setup();
      animate();
    };
    setup();
    animate();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId.current!);
    };
  }, [canvasRef, starCount, speed, starColor, backgroundColor]);
};