// AnimatedTitle.js

import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Typography from '@mui/material/Typography';

const MotionTypography = motion(Typography);

export default function AnimatedTitle({text,color,fontSize,fontFamily}) {

  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    } else {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  return (
    <Typography component="div" aria-label={text} role="heading" ref={ref}>
      {text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          aria-hidden="true"
          initial="hidden"
          animate={ctrls}
          variants={wordAnimation}
          transition={{
            delayChildren: index * 0.25,
            staggerChildren: 0.05,
          }}
          style={{ display: 'inline-block', marginRight: '0.4em', whiteSpace: 'nowrap',color: "#ffffff", fontSize: fontSize, fontFamily: "roboto-regular"}}
        >
          {word.split("").map((character, index) => (
            <MotionTypography
              key={index}
              aria-hidden="true"
              variants={characterAnimation}
              component="span"
              sx={{ display: 'inline-block', marginRight: '-0.05em', fontSize: fontSize, fontFamily: fontFamily,color: color}}
            >
              {character}
            </MotionTypography>
          ))}
        </motion.span>
      ))}
    </Typography>
  );
}
