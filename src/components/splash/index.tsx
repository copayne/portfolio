import React, {
  useEffect,
  useRef,
} from 'react';
import { BiDownload } from 'react-icons/bi';
import {
  animated,
  easings,
  useSpring,
} from '@react-spring/web';
import { useIntersection } from 'react-use';
import ContentContainer from '~/components/common/ContentContainer';
import { getHighlightedText } from '~/helpers/utils';

const SPLASH_CONTENT = "Hi, I'm Cody. I'm a Front End Developer. I like to build stable and scalable apps with functional user interfaces.";

const Splash = () => {
  const line1 = useRef<HTMLDivElement>(null);
  const line2 = useRef<HTMLDivElement>(null);
  const [draw1, animate1] = useSpring(() => ({
    height: "0%",
    config: {
      duration: 750,
      easing: easings.easeOutCubic,
    },
  }), []);
  const [draw2, animate2] = useSpring(() => ({
    margin: "0px 0px 0px 100%",
    config: {
      duration: 500,
      easing: easings.easeOutCubic,
    }
  }), []);
  const line1Intersection = useIntersection(line1, {
    root: null,
    rootMargin: '-200px 0px 0px 0px',
    threshold: 0,
  });

  useEffect(() => {
    if (line1Intersection?.intersectionRatio < 1) {
      animate1({
        height: "100%",
      });
      animate2({
        delay: 600,
        margin: '0px 0px 0px 0%',
      });
    }
  }, [
    line1Intersection?.intersectionRatio,
    animate1,
    animate2,
  ]);
  
  return (
    <ContentContainer id="splash">
      <div className="container flex justify-end items-center mr-[5%] h-[85vh]">
        <div className="container flex flex-col items-end">
          <p className="w-96 text-sm sm:text-2xl bold">
            { getHighlightedText(SPLASH_CONTENT, ['stable', 'scalable', 'functional']) }
          </p>
          <button className="mt-6 mr-6 sm:text-xl h-12 w-32 flex items-center justify-center bg-light-tertiary dark:bg-dark-tertiary text-light-background dark:text-dark-background hover:bg-light-tertiary-dark hover:dark:bg-dark-tertiary-dark cursor-crosshair">
            resume <BiDownload className="mx-2" />
          </button>
        </div>
        <div className="mt-auto ml-5 h-3/4 w-[2px]">
          <animated.div className="bg-light-primary dark:bg-dark-primary" ref={line1} style={draw1} />
        </div>
      </div>
      <div className="w-full h-[2px] ">
        <animated.div className="h-[2px] bg-light-primary dark:bg-dark-primary" ref={line2} style={draw2} />
      </div>
    </ContentContainer>
  )
}

export default Splash;