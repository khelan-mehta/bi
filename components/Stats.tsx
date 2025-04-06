import { animationControls, motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const AnimatedNumber = ({ value }: {value: number}) => {
  const controls = useAnimation();
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    controls.start({
      value,
      transition: { duration: 1.5, ease: "easeOut" },
    });
  }, [controls, value]);

  useEffect(() => {
    controls.start({
      value: [0, value], // Animate from 0 to the target value
      transition: { duration: 1.5, ease: "easeOut" },
    });
  }, [controls, value]);

  return (
    <motion.div
      animate={controls}
      onUpdate={(latest) => {
        if (latest.value !== undefined) {
          setCurrentValue(Math.round(Number(latest.value)));
        }
      }}
    >
      {currentValue}
    </motion.div>
  );
};

const Stats = () => {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <section
      ref={ref}
      className="stats py-6 my-8 px-2 w-full font-sans sm:w-10/12 grid grid-cols-3 border-y sm:mx-auto"
    >
      <div className="border-r flex flex-col items-center gap-1 justify-center">
        {inView && <AnimatedNumber value={9} />}
        <small className="uppercase text-xxs sm:text-xs tracking-wide font-medium">
          Projects
        </small>
      </div>
      <div className="border-r flex flex-col items-center gap-1 justify-center">
        {inView && <AnimatedNumber value={15} />}
        <small className="uppercase text-xxs sm:text-xs tracking-wide font-medium">
          Clients
        </small>
      </div>
      <div className="flex flex-col items-center gap-1 justify-center">
        {inView && <AnimatedNumber value={2} />}
        <small className="uppercase text-xxs sm:text-xs tracking-wide font-medium">
          spells
        </small>
      </div>
    </section>
  );
};

export default Stats;
