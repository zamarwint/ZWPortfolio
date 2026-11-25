"use client";

import { Typewriter } from "nextjs-simple-typewriter";

// UNDERLINE EFFECTS
export const underlineDrawNeutral = (): string => {
  return "cursor-pointer relative no-underline after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-neutral-500 dark:after:bg-neutral-400 after:transition-all after:duration-300 hover:after:w-full";
};

export const underlineDraw = (): string => {
  return "cursor-pointer relative no-underline after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-accent-foreground after:transition-all after:duration-300 hover:after:w-full";
};

// TYPEWRITER
export const TypewriterEffect = ({
  words,
  cursor,
  loop,
  cursorBlink,
  typeSpeed = 70,
  delSpeed = 50,
  delaySpeed = 1000,
}: {
  words: string[];
  loop?: number;
  cursor?: boolean;
  cursorBlink?: boolean;
  typeSpeed?: number;
  delSpeed?: number;
  delaySpeed?: number;
}) => {
  const handleType = (count: number) => {
    console.log(count);
  };

  const handleDone = () => {
    console.log("Done after 5 steps!");
  };

  return (
    <Typewriter
      words={words}
      loop={loop ?? 0}
      cursor={cursor}
      cursorStyle="."
      cursorBlinking={cursorBlink}
      typeSpeed={typeSpeed}
      deleteSpeed={delSpeed}
      delaySpeed={delaySpeed}
      onLoopDone={handleDone}
      onType={handleType}
    />
  );
};