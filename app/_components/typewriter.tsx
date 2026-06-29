import { Typewriter } from 'nextjs-simple-typewriter';

const TypewriterEffect = ({ words }: { words: string[] }) => {
    const handleType = (count: number) => {
        console.log(count);
    }

    const handleDone = () => {
        console.log("Done after 5 steps!");
    }

    return (
        <Typewriter
            words={words}
            loop={0}
            cursor
            cursorStyle='.'
            cursorBlinking={false}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
        />
    )
}

export default TypewriterEffect;