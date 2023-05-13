import React, {
  useEffect,
  useState,
  useRef,
} from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useIntersection } from 'react-use';
import clsx from 'clsx';

interface Props {
  text: string,
  alwaysVisible?: boolean,
}

const FadeInText: React.FC<Props> = ({ text, alwaysVisible = false }) => {
  const [isVisible, setIsVisible] = useState(alwaysVisible);
  const ref = useRef<HTMLDivElement>(null);
  const intersection = useIntersection(ref, {
    root: null,
    rootMargin: '-40% 0px',
    threshold: 0,
  });
  const fade = useSpring({
    from: { opacity: alwaysVisible ? 1 : 0 },
    to: { opacity: isVisible ? 1 : 0 },
    config: {
      duration: 2000,
      loop: false,
    },
  });

  useEffect(() => {
    if (intersection?.isIntersecting && !isVisible) {
      setIsVisible(true);
    }
  }, [intersection?.isIntersecting, isVisible]);

  return (
    <animated.span ref={ref} style={fade}>
      <span className={clsx(
        'text-light-primary dark:text-dark-primary',
        alwaysVisible && 'text-light-tertiary dark:text-dark-secondary',
      )}>
        {text}
      </span>
    </animated.span>
  )
}

export default FadeInText;