import { CountUpAnimationProps } from "@/utils/interface/componetsProps/CountUpAnimationProps";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const CountUpAnimation = ({ end, suffix, prefix }: CountUpAnimationProps) => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const [count, setCount] = useState<number>(end < 50 ? 0 : end - 50);

  useEffect(() => {
    if (inView) {
      if (count < end) {
        const interval = setInterval(() => {
          setCount((prevCount) => prevCount + 1);
        }, 25);

        return () => {
          clearInterval(interval);
        };
      }
    }
  }, [inView, count, end]);

  return (
    <div ref={ref}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0 }}>
        <motion.span
          style={{ display: "flex", alignItems: "center" }}
          key={count}
          initial={{ y: "20%" }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
           {prefix && prefix} {count} {suffix && suffix}
        </motion.span>
      </motion.div>
    </div>
  );
};

export default CountUpAnimation;
