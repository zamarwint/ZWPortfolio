"use client";

export const underlineDrawNeutral = (): string => {
  return "cursor-pointer relative no-underline after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-neutral-500 dark:after:bg-neutral-400 after:transition-all after:duration-300 hover:after:w-full";
};

export const underlineDraw = (): string => {
  return "cursor-pointer relative no-underline after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full";
};
