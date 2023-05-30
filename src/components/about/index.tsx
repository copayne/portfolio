import React, {
  useEffect,
  useRef,
} from 'react';
import Image from 'next/image';
import {
  animated,
  easings,
  useSpring,
} from '@react-spring/web';
import { useIntersection } from 'react-use';
import ContentContainer from '~/components/common/ContentContainer';
import FadeInContent  from '~/components/common/FadeInContent';
import IconRow from '~/components/common/IconRow';
import { getHighlightedText } from '~/helpers/utils';
import reactLogo from '../../../public/react-logo.png';
import gitLogo from '../../../public/git-logo.svg';
import htmlLogo from '../../../public/html-logo.png';
import reduxLogo from '../../../public/redux-logo.png';
import sqlLogo from '../../../public/sql-logo.png';
import typescriptLogo from '../../../public/typescript-logo.svg';

const ABOUT_CONTENT = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta rhoncus lectus, at lobortis magna semper id. Suspendisse leo justo, cursus et pellentesque id, rhoncus vitae risus.";

const About = () => {
  const line1 = useRef<HTMLDivElement>(null);
  const line2 = useRef<HTMLDivElement>(null);
  const line3 = useRef<HTMLDivElement>(null);
  const [draw1, animate1] = useSpring(() => ({
    height: "0vh",
    config: {
      duration: 750,
      easing: easings.easeOutCubic,
    },
  }), []);
  const [draw2, animate2] = useSpring(() => ({
    width: "0%",
    config: {
      duration: 500,
      easing: easings.easeOutCubic,
    },
  }), []);
  const [draw3, animate3] = useSpring(() => ({
    height: "0vh",
    config: {
      duration: 750,
      easing: easings.easeOutCubic,
    },
  }), []);

  const trigger = useIntersection(line3, {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  });

  useEffect(() => {
    if (trigger?.intersectionRatio === 1) {
      animate1({
        height: "65vh",
      });
      animate2({
        delay: 750,
        width: "50%",
      });
      animate3({
        delay: 1250,
        height: "20vh",
      });
    }
  }, [
    trigger?.intersectionRatio,
    animate1,
    animate2,
    animate3,
  ]);

  return (
    <ContentContainer id="aboutContainer">
      <div className="container flex flex-col min-h-[85vh]">
        <div className="container flex">
          <div id="about" className="h-[65vh] w-[2px]">
            <animated.div className="w-[2px] bg-light-primary dark:bg-dark-primary" style={draw1} />
          </div>
          <div className="mt-[5%] ml-[5%]">
            <div className="container flex flex-col items-start">
            <p className="text-sm sm:text-4xl text-light-primary dark:text-dark-primary font-thin mb-5">
              About
            </p>
              <div className="text-sm sm:text-xl w-1/2">
                { getHighlightedText(ABOUT_CONTENT, ['lobortis', 'pellentesque', 'hendrerit']) }
              </div>
            </div>
            <br />
            <div ref={line1} className="container flex flex-col items-start">
              <p  className="text-sm sm:text-4xl text-light-primary dark:text-dark-primary font-thin mb-5">
                Skills
              </p>
              <FadeInContent>
                <IconRow icons={SKILLS} />
              </FadeInContent>
            </div>
          </div>
        </div>
        <div className="w-full h-[2px]">
          <animated.div className="h-[2px] bg-light-primary dark:bg-dark-primary" ref={line2} style={draw2} />
        </div>
        <div className="w-1/2 h-[20vh] flex justify-end">
          <animated.div className="w-[2px] bg-light-primary dark:bg-dark-primary" ref={line3} style={draw3} />
        </div>
      </div>
    </ContentContainer>
  )
}

export default About;

const SKILLS = [
  {
    alt: 'html5/css3/js logo',
    src: htmlLogo,
    label: 'html5/css3/js'
  },
  {
    alt: 'react logo',
    src: reactLogo,
    label: 'react',
  },
  {
    alt: 'redux logo',
    src: reduxLogo,
    label: 'redux',
  },
  {
    alt: 'typescript logo',
    src: typescriptLogo,
    label: 'typescript',
  },
  {
    alt: 'git logo',
    src: gitLogo,
    label: 'git',
  },
  {
    alt: 'sql logo',
    src: sqlLogo,
    label: 'sql',
  },
];