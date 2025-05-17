import { useState, useEffect, useRef } from "react";

interface UseCounterProps {
  target: number;
  startAt?: number;
  duration?: number;
  easing?: (t: number) => number;
}

// Default easing function (ease-out-quad)
const defaultEasing = (t: number) => t * (2 - t);

export const useCounter = ({
  target,
  startAt = 0,
  duration = 2000,
  easing = defaultEasing,
}: UseCounterProps) => {
  const [count, setCount] = useState(startAt);
  const startTime = useRef<number | null>(null);
  const frameId = useRef<number | null>(null);
  const isRunning = useRef<boolean>(false);

  useEffect(() => {
    // Reset when target changes
    if (isRunning.current) {
      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
      }
      startTime.current = null;
      isRunning.current = false;
      setCount(startAt);
    }
  }, [target, startAt]);

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startTime.current) {
        startTime.current = timestamp;
      }

      const progress = Math.min((timestamp - startTime.current) / duration, 1);
      const easedProgress = easing(progress);
      const currentCount = Math.floor(startAt + easedProgress * (target - startAt));

      setCount(currentCount);

      if (progress < 1) {
        frameId.current = requestAnimationFrame(animate);
      } else {
        // Ensure we end exactly on the target
        setCount(target);
        isRunning.current = false;
      }
    };

    const startCounter = () => {
      isRunning.current = true;
      frameId.current = requestAnimationFrame(animate);
    };

    // Start the counter
    startCounter();

    // Cleanup function
    return () => {
      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
      }
    };
  }, [target, startAt, duration, easing]);

  return count;
};
