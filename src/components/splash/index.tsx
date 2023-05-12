import ContentContainer from '~/components/common/ContentContainer';
import { getHighlightedText } from '~/helpers/utils';
import { BiDownload } from 'react-icons/bi';

const SPLASH_CONTENT = "Hi, I'm Cody. I'm a Front End Developer. I like to build stable and scalable apps with functional user interfaces.";

const Splash = () => (
  <ContentContainer id="splash">
    <div className="container flex justify-end items-center mr-[5%]">
      <div className="container flex flex-col items-end">
        <p className="w-96 text-sm sm:text-2xl bold">
          { getHighlightedText(SPLASH_CONTENT, ['stable', 'scalable', 'functional']) }
        </p>
        <button className="mt-6 mr-6 sm:text-xl h-12 w-32 flex items-center justify-center bg-light-tertiary dark:bg-dark-tertiary text-light-background dark:text-dark-background hover:bg-light-tertiary-dark hover:dark:bg-dark-tertiary-dark cursor-crosshair">
          resume <BiDownload className="mx-2" />
        </button>
      </div>
    </div>
  </ContentContainer>
);

export default Splash;