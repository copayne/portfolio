import React from 'react';
import ContentContainer from '~/components/common/ContentContainer';
import { getHighlightedText } from '~/helpers/utils';

const ABOUT_CONTENT = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta rhoncus lectus, at lobortis magna semper id. Suspendisse leo justo, cursus et pellentesque id, rhoncus vitae risus.";

const About = () => {

  return (
    <ContentContainer id="about">
      <div className="mt-[5%] ml-[5%]">
        <div className="container flex flex-col items-start">
        <p className="text-sm sm:text-4xl text-light-primary dark:text-dark-primary font-thin mb-6">
          About
        </p>
          <div className="text-sm sm:text-xl w-1/2">
            { getHighlightedText(ABOUT_CONTENT, ['lobortis', 'pellentesque', 'hendrerit']) }
          </div>
        </div>
        <br />
        <div className="container flex flex-col items-start">
        <p className="text-sm sm:text-4xl text-light-primary dark:text-dark-primary font-thin mb-6">
          Skills
        </p>
        </div>
      </div>
    </ContentContainer>
  )
}

export default About;