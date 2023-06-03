import React, {
  useEffect,
  useRef,
} from 'react';
import {
  animated,
  easings,
  useSpring,
} from '@react-spring/web';
import { useIntersection } from 'react-use';
import ContentContainer from '~/components/common/ContentContainer';
import { ProjectDetail } from './ProjectDetail';
import { ProjectsMenu } from './ProjectsMenu';

const Projects = () => {
  const line1 = useRef<HTMLDivElement>(null);
  const line2 = useRef<HTMLDivElement>(null);
  const line3 = useRef<HTMLDivElement>(null);
  const line4 = useRef<HTMLDivElement>(null);
  const line5 = useRef<HTMLDivElement>(null);
  const line6 = useRef<HTMLDivElement>(null);
  const line7 = useRef<HTMLDivElement>(null);
  const [draw1, animate1] = useSpring(() => ({
    width: '0%',
    config: {
      duration: 750,
      easing: easings.easeOutCubic,
    },
  }), []);
  const [draw2, animate2] = useSpring(() => ({
    width: '0%',
    config: {
      duration: 750,
      easing: easings.easeOutCubic,
    }
  }), []);
  const [draw3, animate3] = useSpring(() => ({
    height: '0%',
    config: {
      duration: 750,
      easing: easings.easeOutCubic,
    },
  }), []);
  const [draw4, animate4] = useSpring(() => ({
    height: '0%',
    config: {
      duration: 750,
      easing: easings.easeOutCubic,
    }
  }), []);
  const [draw5, animate5] = useSpring(() => ({
    width: '0%',
    config: {
      duration: 750,
      easing: easings.easeOutCubic,
    },
  }), []);
  const [draw6, animate6] = useSpring(() => ({
    width: '0%',
    config: {
      duration: 750,
      easing: easings.easeOutCubic,
    }
  }), []);
  const [draw7, animate7] = useSpring(() => ({
    height: '0vh',
    config: {
      duration: 750,
      easing: easings.easeOutCubic,
    }
  }), []);
  const trigger = useIntersection(line1, {
    root: null,
    rootMargin: '0px',
    threshold: 0.95,
  });
  const trigger2 = useIntersection(line7, {
    root: null,
    rootMargin: '0px',
    threshold: 0.95,
  });
  
  useEffect(() => {
    if (trigger?.intersectionRatio === 1) {
      animate1({
        width: '100%',
      });
      animate2({
        width: '100%',
      });
      animate3({
        delay: 750,
        height: '100%',
      });
      animate4({
        delay: 750,
        height: '100%',
      });
    }
  }, [
    trigger?.intersectionRatio,
    animate1,
    animate2,
    animate3,
    animate4,
  ]);

  useEffect(() => {
    if (trigger2?.intersectionRatio === 1) {
      animate5({
        delay: 500,
        width: '100%',
      });
      animate6({
        delay: 500,
        width: '100%',
      });
      animate7({
        delay: 1500,
        height: '28vh',
      })
    }
  }, [
    trigger2?.intersectionRatio,
    animate5,
    animate6,
    animate7,
  ]);
  
  return (
    <ContentContainer id="projects">
      <div className="mx-auto">
        <div className="flex">
          <div className="w-1/2 h-[2px] rotate-180">
            <animated.div className="h-[2px] bg-light-primary dark:bg-dark-primary" ref={line1} style={draw1} />
          </div>
          <div className="w-1/2 h-[2px]">
            <animated.div className="h-[2px] bg-light-primary dark:bg-dark-primary" ref={line2} style={draw2} />
          </div>
        </div>
        <div className="container flex h-full">
          <div className="w-[2px]">
            <animated.div className="w-[2px] bg-light-primary dark:bg-dark-primary" ref={line3} style={draw3} />
          </div>
          <div className="w-full flex flex-col items-center">
            <p className="text-center text-sm sm:text-4xl text-light-primary dark:text-dark-primary font-thin mb-6 mt-4">
              Projects
            </p>
            <div className="container flex w-full">
              <ProjectsMenu/>
              <ProjectDetail />
            </div>
          </div>
          <div className="w-[2px]">
            <animated.div className="w-[2px] bg-light-primary dark:bg-dark-primary" ref={line4} style={draw4} />
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2 h-[2px]">
          <animated.div className="h-[2px] bg-light-primary dark:bg-dark-primary" ref={line5} style={draw5} />
        </div>
        <div className="w-1/2 h-[2px] rotate-180">
          <animated.div className="h-[2px] bg-light-primary dark:bg-dark-primary" ref={line6} style={draw6} />
        </div>
      </div>
      <div className="h-full w-1/2 flex justify-end">
        <div className="w-[2px] h-[20vh]">
          <animated.div className="w-2px bg-light-primary dark:bg-dark-primary" ref={line7} style={draw7} />
        </div>
      </div>
    </ContentContainer>
  )
}

export default Projects;