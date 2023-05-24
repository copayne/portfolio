import React, {
  useEffect,
  useState,
  useRef,
} from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useIntersection } from 'react-use';
import clsx from 'clsx';

interface Props {
  alwaysVisible?: boolean,
  children: React.ReactNode,
}

const FadeInContent: React.FC<Props> = ({ children, alwaysVisible = false }) => {
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
      duration: 1500,
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
        {children}
      </span>
    </animated.span>
  )
}

export default FadeInContent;