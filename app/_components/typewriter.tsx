import { Typewriter } from "nextjs-simple-typewriter";

const TypewriterEffect = ({
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

export default TypewriterEffect;
