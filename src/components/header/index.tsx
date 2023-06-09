import React, {
  useState,
  useEffect,
} from 'react';
import { type NextPage } from "next";
import { clsx } from 'clsx';
import DarkMode from "~/components/utils/DarkMode";
import NamePlate from '~/components/common/NamePlate';

const Header: NextPage = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsMinimized(window.scrollY > 95.5);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // TODO: update the transition between sizes to use translate for a smoother animation
  return (
    <div
      className={clsx(
        "sticky top-0 m-auto flex justify-between p-2 transition-all",
        !isMinimized && 'max-w-full sm:max-w-screen-lg items-start',
        isMinimized && "max-w-full xl:max-w-screen-2xl items-center px-4",
      )}
    >
      <NamePlate size={isMinimized ? 'small' : 'medium' } />
      <DarkMode size={isMinimized ? 'small' : 'medium' } />
    </div>
  )
}

export default Header;