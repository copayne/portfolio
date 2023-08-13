import React from 'react';
import { BiDownload } from 'react-icons/bi';
import ContentContainer from '~/components/common/ContentContainer';
import { getHighlightedText } from '~/helpers/utils';

const SPLASH_CONTENT = "Hi, I'm Cody. I like to build stable and scalable apps with functional user interfaces.";

const Splash = () => (
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
        <div className="bg-light-primary dark:bg-dark-primary h-full" />
      </div>
    </div>
    <div className="w-full h-[2px] ">
      <div className="h-[2px] w-full bg-light-primary dark:bg-dark-primary" />
    </div>
  </ContentContainer>
);

export default Splash;