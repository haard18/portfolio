import { useEffect, useState, useCallback } from 'react';
import { Keyboard } from '@/components/ui/keyboard';
import { motion, AnimatePresence } from 'framer-motion';

interface KeyboardLoaderProps {
  onLoadingComplete: () => void;
}

export function KeyboardLoader({ onLoadingComplete }: KeyboardLoaderProps) {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  const simulateEnterPress = useCallback(() => {
    document.dispatchEvent(
      new KeyboardEvent('keydown', { code: 'Enter', bubbles: true })
    );
    setTimeout(() => {
      document.dispatchEvent(
        new KeyboardEvent('keyup', { code: 'Enter', bubbles: true })
      );
    }, 100);
  }, []);

  useEffect(() => {
    const duration = 5000;
    const start = Date.now();

    // Progress bar
    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - start;
      setProgress(Math.min(elapsed / duration, 1));
    }, 50);

    // Random Enter presses (every 300-700ms)
    let enterTimeout: ReturnType<typeof setTimeout>;
    const schedulePress = () => {
      const delay = 300 + Math.random() * 400;
      enterTimeout = setTimeout(() => {
        simulateEnterPress();
        schedulePress();
      }, delay);
    };
    // First press after a short delay
    enterTimeout = setTimeout(() => {
      simulateEnterPress();
      schedulePress();
    }, 500);

    // End loading
    const endTimeout = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(enterTimeout);
      clearTimeout(endTimeout);
    };
  }, [simulateEnterPress]);

  return (
    <AnimatePresence onExitComplete={onLoadingComplete}>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
        >
          <div className="flex flex-col items-center gap-8">
            <Keyboard theme="dolch" enableSound enableHaptics />

            <div className="flex flex-col items-center gap-3 w-[600px] max-w-[90vw]">
              <div className="w-full h-px bg-border overflow-hidden rounded-full">
                <motion.div
                  className="h-full bg-muted-foreground/50"
                  style={{ width: `${progress * 100}%` }}
                  transition={{ duration: 0.05 }}
                />
              </div>
              <p className="font-mono text-[11px] text-muted-foreground/60 tracking-wider">
                press any key or wait
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
